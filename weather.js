function onClickTemperatureBtn()
{
    resetRestartTimeout();
    
    currentTemperature = $(this).data('temperature');
    
    $('#gui-temperature .gui-btn').removeClass('active');
    
    $(this).addClass('active');
    
    jbody.removeClass('temperature-cold temperature-hot')
            .addClass('temperature-' + currentTemperature);
    
    if (initComplete)
        updateEffects();

    updateWeatherSummaryGUI();

    return false;
}

function onClickRainBtn()
{
    resetRestartTimeout();
    
    currentRain = $(this).data('rain-level');
    
    $('#gui-rain .gui-btn').removeClass('active');
    $(this).addClass('active');
    
    if (currentRain == 'none')
        stopRain();
    else
        startRain();
    
    if (initComplete)
        updateEffects();

    updateWeatherSummaryGUI();
    
    return false;
}

function stopRain()
{
    if (isset(window.stopRainTimeout))
        clearTimeout(window.stopRainTimeout);
    if (isset(window.startRainTimeout))
        clearTimeout(window.startRainTimeout);
    
    jbody.removeClass('raining raining-low raining-high');
    
    window.stopRainTimeout = setTimeout(function()
    {
        $('#rain')[0].pause();
    }, 3000);
    
    /*if (isset(window.stopRainTimeout))
        clearTimeout(window.stopRainTimeout);
    if (isset(window.idleStopRainTimeout))
        clearTimeout(window.idleStopRainTimeout);

    jbody.removeClass('raining raining-low raining-high');

    window.stopRainTimeout = setTimeout(function()
    {
        pJSDom[0].pJS.particles.move.enable = false;
        pJSDom[1].pJS.particles.move.enable = false;
    }, 3000);*/
}

function startRain()
{
    if (isset(window.stopRainTimeout))
        clearTimeout(window.stopRainTimeout);
    if (isset(window.startRainTimeout))
        clearTimeout(window.startRainTimeout);
    
    jbody.removeClass('raining-low raining-high');
    jbody.addClass('raining raining-' + currentRain);
    
    window.startRainTimeout = setTimeout(function()
    {
        $('#rain')[0].play();
    }, 500);
    
    return;
    
    // if (isset(window.stopRainTimeout))
    //     clearTimeout(window.stopRainTimeout);
    //
    // if (isset(window.idleStopRainTimeout))
    //     clearTimeout(window.idleStopRainTimeout);
    //
    // if (isset(window.rainIntensityInterval))
    //     clearTimeout(window.rainIntensityInterval);
    
    // pJSDom[0].pJS.particles.number.value = intensity * 80;
    
    // pJSDom[0].pJS.particles.shape.image.src = intensity == 1
    //     ? 'img/rain-low.png'
    //     : 'img/rain-high.png';
    
    // pJSDom[0].pJS.particles.move.enable = false;
    // pJSDom[1].pJS.particles.move.enable = false;
    
    let rainIndex = currentRain == 'low' ? 0 : 1;
    
    pJSDom[rainIndex].pJS.particles.move.enable = true;
    
    pJSDom[rainIndex].pJS.fn.particlesRefresh();
    
    //-- lance un timeout pour stopper l'autre pluie s'il y en avait une
    if (jbody.hasClass('raining'))
    {
        let otherRainIndex = currentRain == 'low' ? 1 : 0;
        
        window.stopRainTimeout = setTimeout(function()
        {
            pJSDom[otherRainIndex].pJS.particles.move.enable = false;
        }, 3000);
    }
    
    jbody.removeClass('raining-low raining-high');
    jbody.addClass('raining raining-' + currentRain);
    
    //-- arrête la pluie automatiquement au bout d'un certain temps
    window.idleStopRainTimeout = setTimeout(idleStopRain, 60000);
}

function idleStopRain()
{
    $('#gui-rain .gui-btn[data-rain-level="none"]').click();
}