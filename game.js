function changeMilieu(e)
{
    currentMilieu++;

    if (currentMilieu >= numMilieux)
        currentMilieu = 0;

    viewportScroll.animate({
        left: -currentMilieu * sceneWidth,
    });

    $('#nav-current').animate({
        left: currentMilieu * $('#nav').width() / numMilieux,
        'background-position-x': -currentMilieu * $('#nav').width() / numMilieux
    });

    updateEffects();

    // var offset = $(this).offset();
    // log('x = ' + ((e.pageX - offset.left) / $(this).outerWidth() * 100) + '% , y = ' + ((e.pageY - offset.top) / $(this).outerHeight() * 100) + "%" );

    hideAllModals();
}

function updateEffects()
{
    Object.keys(effects.progress).forEach(updateProgressEffect);
    Object.keys(effects.score).forEach(udpateScoreEffect);
}

function updateProgressEffect(effectName)
{
    let effect = effects.progress[effectName];
    let effectRes = calcEffect(effectName, effect);
    let effectValue = effectRes.value;
    let effectRatio = effectValue / 5;

    let guiEffect = $('.gui-effect-' + effectName);

    guiEffect.find('.gui-effect-bar-progress').width(effectRatio * 100 + '%');

    guiEffect.find('.gui-effect-more').toggleClass('active', effectRes.hasModifiers);
}

function udpateScoreEffect(effectName)
{
    let effect = effects.score[effectName];
    let effectRes = calcEffect(effectName, effect);
    let effectValue = effectRes.value;
    let effectRatio = Math.max(0, effectValue-1) * 25 / 100; // <- attention il y a un pb de calcul car 0 et 1 s'afficheront sur le même curseur (rouge).. à préciser
    let guiEffect = $('.gui-effect-' + effectName);

    let left = effectRatio * guiEffect.find('.gui-effect-bar').width() * 0.8;

    guiEffect.find('.gui-effect-bar-score').css('left', left);

    guiEffect.find('.gui-effect-more').toggleClass('active', effectRes.hasModifiers);
}

function calcEffect(effectName, effect)
{
    let effectValue = effect.default;
    let hasModifiers = false;

    for (let i in amenagements)
    {
        let amenagement = amenagements[i];

        if (amenagement.milieu != milieux[currentMilieu].name
            || !amenagement.active
            || !isset(amenagement.effects[effectName]))
            continue;

        let modifier = amenagement.effects[effectName];
        effectValue += modifier;

        hasModifiers = true;
    }

    if (effectValue < 0)
        effectValue = 0;
    else if (effectValue > 5)
        effectValue = 5;

    return {
        value: effectValue,
        hasModifiers: hasModifiers
    };
}

function onClickBulleAmenagement()
{
    hideAllModals();

    let amenagementElt = $(this).closest('.amenagement');
    let milieu = amenagementElt.closest('.milieu');

    //-- Remet l'aménagement en dernier dans son conteneur, pour qu'il prenne le max zIndex
    let focusClone = amenagementElt.clone().appendTo($('#focus-container'));

    focusClone.data('amenagement', amenagementElt.data('amenagement'));
    focusClone.data('amenagement-elt-base', amenagementElt);

    //-- Met le focus sur l'aménagement
    focusClone.addClass('focus');

    //-- Baisse l'opacité des autres bulles
    $('.bulle-amenagement').addClass('light');
    focusClone.find('.bulle-amenagement').removeClass('light');

    $('#focus-overlay').addClass('visible');
    $('body').addClass('focus');

    return false;
}

function toggleAmenagement()
{
    let amenagementElt = $(this).closest('.amenagement');
    let amenagement = amenagementElt.data('amenagement');

    //-- ajoute l'élément de base (non cloné) au selecteur jquery, pour appliquer les modifications sur les deux en même temps
    amenagementElt = amenagementElt.add(amenagementElt.data('amenagement-elt-base'));

    amenagementElt.toggleClass('active');

    amenagement.active = amenagementElt.is('.active');

    updateEffects();
    hideAllModals();

    return false;
}

function stopRain()
{
    if (isset(window.stopRainTimeout))
        clearTimeout(window.stopRainTimeout);

    $('body').removeClass('raining raining-low raining-high');

    window.stopRainTimeout = setTimeout(function()
    {
        pJSDom[0].pJS.particles.move.enable = false;
        pJSDom[1].pJS.particles.move.enable = false;
    }, 3000);
}

function startRain(rainLevel)
{
    if (isset(window.stopRainTimeout))
        clearTimeout(window.stopRainTimeout);

    if (isset(window.rainIntensityInterval))
        clearTimeout(window.rainIntensityInterval);

    // pJSDom[0].pJS.particles.number.value = intensity * 80;

    // pJSDom[0].pJS.particles.shape.image.src = intensity == 1
    //     ? 'img/rain-low.png'
    //     : 'img/rain-high.png';

    // pJSDom[0].pJS.particles.move.enable = false;
    // pJSDom[1].pJS.particles.move.enable = false;

    let rainIndex = rainLevel == 'low' ? 0 : 1;

    pJSDom[rainIndex].pJS.particles.move.enable = true;

    pJSDom[rainIndex].pJS.fn.particlesRefresh();

    //-- lance un timeout pour stopper l'autre pluie s'il y en avait une
    if ($('body').hasClass('raining'))
    {
        let otherRainIndex = rainLevel == 'low' ? 1 : 0;

        window.stopRainTimeout = setTimeout(function()
        {
            pJSDom[otherRainIndex].pJS.particles.move.enable = false;
        }, 3000);
    }

    $('body').removeClass('raining-low raining-high');
    $('body').addClass('raining raining-' + rainLevel);
}

function hideAllModals()
{
    $('#focus-container').empty();

    $('#focus-overlay').removeClass('visible');
    $('body').removeClass('focus');

    $('#gui-effect-more-info').removeClass('visible');

    $('.amenagement').removeClass('focus');
    $('.bulle-amenagement').removeClass('light');
}
