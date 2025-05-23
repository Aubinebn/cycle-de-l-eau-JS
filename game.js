function logClickPos(e)
{
    //log('x = ' + (e.pageX / sceneWidth * 100) + '% , y = ' + (e.pageY / sceneHeight * 100) + "%" );
    // log((e.pageX/0.555)/sceneWidth*100, (e.pageY/0.555)/sceneHeight*100);
    log((e.pageX/0.555) * (currentMilieu + 1), (e.pageY/0.555));

}

function changeMilieu(newMilieuIndex)
{
    requestAnimationFrame(function()
    {
        currentMilieu = newMilieuIndex;
        
        jbody.attr('data-milieu', currentMilieu+1);
        
        // viewportScroll.transition(
        //         { x: -currentMilieu * sceneWidth },
        //         {
        //             complete: function() {
        //                 $('#focus-container').css('transform', `translateX(${-currentMilieu * sceneWidth}px)`)
        //             }
        //         }
        // );
        
        // $('#nav-current').transition({
        //     x: currentMilieu * $('#nav').width() / numMilieux,
        //     'background-position-x': -currentMilieu * $('#nav').width() / numMilieux
        // });
        
        // $('#rain').transition({
        //     '-webkit-mask-position-x' : -currentMilieu * sceneWidth
        // });
        
        updateEffects();
        hideAllModals();
        updateWeatherSummaryGUI();
    });
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
    guiEffect.data('effect-value', effectValue);
    guiEffect.data('effect-ratio', effectRatio);

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
        for (let effectName in allEffects)
        {
            let effect = allEffects[effectName];

            if (!isset(effect.modifiers))
                continue;

            let indicatorElt = $('.effect-indicator-' + effectName);

            let weatherModifier = effect.modifiers[currentTemperature]['rain_' + currentRain];

            let indicatorVisible = weatherModifier > 0;

            let indicatorRatio = .5 + weatherModifier * .5;

            if (effectName === 'ruissellement')
            {
                indicatorRatio = 1;

                //-- pour le ruissellement, on ne montre pas l'indicateur si la valeur de l'effet est trop faible
                let globalEffectValue = $('.gui-effect-' + effectName).data('effect-ratio');
                indicatorRatio = weatherModifier * globalEffectValue;
                indicatorRatio = easeOutQuad(indicatorRatio);
            }

            indicatorElt
                .toggleClass('visible', indicatorVisible)
                .css('opacity', indicatorRatio)
                // .css('transform', 'scale(' + indicatorScale + ')');
        }
}

function calcEffect(effectName, effect)
{
    let currentMilieuName = milieux[currentMilieu].name;
    
    let effectValue = effect.default[currentMilieuName];
    let hasModifiers = false;
    
    for (let i in amenagementList)
    {
        let amenagement = amenagementList[i];

        if (amenagement.milieu != currentMilieuName
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

function updateNappe()
{
    if (jbody.hasClass('focus'))
    {
        requestAnimationFrame(updateNappe);
        return;
    }

    let ratio = $('.gui-effect-infiltration').data('effect-ratio');
    nappeOpacity += (ratio - nappeOpacity) * 0.015;

    let maxTranslate = 500;
    let translate = maxTranslate - nappeOpacity * maxTranslate;

    $('#nappe-phreatique').css('opacity', nappeOpacity);
    $('#nappe-phreatique').css('transform', 'translateY(' + translate + 'px)');

    requestAnimationFrame(updateNappe);
}

function onClickBulleAmenagement()
{
    resetRestartTimeout();
    hideAllModals();
    
    $('#focus-container').stop(true, false).empty();
    
    let amenagementElt = $(this).closest('.amenagement');

    //-- Si la bulle sur laquelle on clique était déja en focus on s'arrête la
    if (amenagementElt.is('.focus'))
            return false;

    let milieu = amenagementElt.closest('.milieu');

    //-- Remet l'aménagement en dernier dans son conteneur, pour qu'il prenne le max zIndex
    let focusClone = amenagementElt.clone().appendTo($('#focus-container'));

    focusClone.data('amenagement', amenagementElt.data('amenagement'));
    focusClone.data('amenagement-elt-base', amenagementElt);

    //-- Met le focus sur l'aménagement
    amenagementElt.addClass('focus');
    focusClone.addClass('focus');

    //-- Supprime les indicateurs d'effets
    focusClone.find('.effect-indicator').remove();

    //-- Baisse l'opacité des autres bulles
    $('.bulle-amenagement').addClass('light');
    focusClone.find('.bulle-amenagement').removeClass('light');

    $('body').addClass('focus');
    
    if (!amenagementElt.is('.point-info'))
        $('#focus-overlay').addClass('visible');
    
    $('#focus-container').hide().delay(100).fadeIn(500);

    window.showBulleTimeout = setTimeout(function()
    {
        focusClone.find('.image-focus').addClass('animate');
    }, 500);

    return false;
}

function toggleAmenagement()
{
    resetRestartTimeout();
    
    let amenagementElt = $(this).closest('.amenagement');
    let amenagement = amenagementElt.data('amenagement');
    
    if (amenagementElt.hasClass('activating'))
        return;

    //-- ajoute l'élément de base (non cloné) au selecteur jquery, pour appliquer les modifications sur les deux en même temps
    amenagementElt = amenagementElt.add(amenagementElt.data('amenagement-elt-base'));

    let active = !amenagementElt.hasClass('active');
    
    amenagementElt.toggleClass('active');
    
    amenagement.active = amenagementElt.is('.active');
    
    if (active)
    {
            amenagementElt.addClass('activating');
        
            setTimeout(function(){
                hideAllModals();
                
                setTimeout(function(){
                    amenagementElt.removeClass('activating');
                }, 300);
                
            }, 400);
    }
    else
    {
        hideAllModals();
    }
    
    updateEffects();

    return false;
}

function hideAllModals()
{
    $('#focus-container').fadeOut();

    $('#focus-overlay').removeClass('visible');
    $('body').removeClass('focus');

    $('#gui-effect-more-info').removeClass('visible');

    $('.amenagement').removeClass('focus');
    $('.bulle-amenagement').removeClass('light');

    if (isset(window.showBulleTimeout))
        clearTimeout(window.showBulleTimeout);
}

function updateWeatherSummaryGUI()
{
    let labelTempElt = $('#gui-weather-summary .gui-label .temperature').empty().removeClass('cold hot');
    let labelRainElt = $('#gui-weather-summary .gui-label .rain').empty().removeClass('none low high');
    let contentElt = $('#gui-weather-summary .gui-weather-summary-content').empty();

    let rainText = 'Temps ensoleillé';
    if (currentRain == 'low')
        rainText = 'Faibles averses';
    else if (currentRain == 'high')
        rainText = 'Forte pluie';
    
    let temperatureText = currentTemperature == 'cold'
        ? 'températures en baisse'
        : 'chaleurs estivales';
    
    //-- Update le titre des conditions météo
    // labelTempElt.html(temperatureText)
            // .addClass(currentTemperature);

    // labelRainElt.html(rainText)
            // .addClass(currentRain);
            
    let currentMilieuName = milieux[currentMilieu].name;
    
    //-- Update le texte des conditions météo
    let weatherText = weatherTexts[currentMilieuName][currentTemperature][currentRain];
    contentElt.html(
        '<p><strong>' + rainText + ' et ' + temperatureText + '</strong></p>' +
        weatherText
    );
}