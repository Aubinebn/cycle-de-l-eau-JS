function logClickPos(e)
{
    //log('x = ' + (e.pageX / sceneWidth * 100) + '% , y = ' + (e.pageY / sceneHeight * 100) + "%" );
    log((e.pageX/0.555)/sceneWidth*100, (e.pageY/0.555)/sceneHeight*100);
}

function changeMilieu(e)
{
    currentMilieu++;

    if (currentMilieu >= numMilieux)
        currentMilieu = 0;

    viewportScroll.animate({
        left: -currentMilieu * sceneWidth,
    }, {
        complete: function()
        {
            $('#focus-container').css('left', -currentMilieu * sceneWidth);
        }
    });

    $('#nav-current').animate({
        left: currentMilieu * $('#nav').width() / numMilieux,
        'background-position-x': -currentMilieu * $('#nav').width() / numMilieux
    });

    updateEffects();

    hideAllModals();
}

function updateEffects()
{
    Object.keys(effects.progress).forEach(updateProgressEffect);
    Object.keys(effects.score).forEach(udpateScoreEffect);

    updateAmenagementsEffects();
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

function updateAmenagementsEffects()
{
    log('updateAmenagementsEffects');

    // for (let i in amenagements)
    // {
    //     let amenagement = amenagements[i];
    //
        for (let effectName in allEffects)
        {
    //         let amenagementEffect = amenagement.effects[effectName];
    //
    //         if (!isset(amenagementEffect.indicator))
    //             continue;

            let effect = allEffects[effectName];

            if (!isset(effect.modifiers))
                continue;

            let weatherModifier = effect.modifiers[currentTemperature]['rain_' + currentRain];
            let indicatorVisible = weatherModifier > 0;
            let indicatorScale = weatherModifier == 0
                ? 0
                : .5 + weatherModifier * .5;

            $('.effect-indicator-' + effectName)
                .toggleClass('visible', indicatorVisible)
                .css('transform', 'scale(' + indicatorScale + ')')
                .attr('data-scale', indicatorScale);
        }
    // }
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

        let modifier = amenagement.effects[effectName].modifier;
        effectValue += modifier;

        // if (effectName == 'infiltration')
        //     log('modifier ', amenagement.label);

        hasModifiers = true;
    }

    //-- modifiers météo ?
    if (isset(effect.modifiers) && isset(effect.modifiers[currentTemperature]['rain_' + currentRain]))
    {
        let weatherModifier = effect.modifiers[currentTemperature]['rain_' + currentRain];

        // if (effectName == 'infiltration')
        //     log('modifier for ', effect.label, 'value=', effectValue, 'modifier=', weatherModifier);

        effectValue *= weatherModifier;
    }

    //-- normalisation
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
    amenagementElt.addClass('focus');
    focusClone.addClass('focus');

    //-- Baisse l'opacité des autres bulles
    $('.bulle-amenagement').addClass('light');
    focusClone.find('.bulle-amenagement').removeClass('light');

    $('body').addClass('focus');
    $('#focus-overlay').addClass('visible');
    $('#focus-container').hide().delay(100).fadeIn(500);

    window.showBulleTimeout = setTimeout(function()
    {
        focusClone.find('.image-focus').addClass('animate');
    }, 1000);

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

function hideAllModals()
{
    $('#focus-container').empty();

    $('#focus-overlay').removeClass('visible');
    $('body').removeClass('focus');

    $('#gui-effect-more-info').removeClass('visible');

    $('.amenagement').removeClass('focus');
    $('.bulle-amenagement').removeClass('light');

    if (isset(window.showBulleTimeout))
        clearTimeout(window.showBulleTimeout);
}
