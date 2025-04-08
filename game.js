var effects = {
    'evaporation': 1,
    'ruissellement': 1,
    'infiltration': 1,
    'qualiteEau': 1,
    'biodiversite': 1,
    'reseauEau' : 1
}


function changeMilieu(e)
{
    currentMilieu++;

    if (currentMilieu >= numMilieux)
        currentMilieu = 0;

    viewportScroll.animate({
        left: -currentMilieu * sceneWidth / numMilieux,
    });

    $('#nav-current').animate({
        left: currentMilieu * $('#nav').width() / numMilieux,
        'background-position-x': -currentMilieu * $('#nav').width() / numMilieux
    });

    // var offset = $(this).offset();
    // log('x = ' + ((e.pageX - offset.left) / $(this).outerWidth() * 100) + '% , y = ' + ((e.pageY - offset.top) / $(this).outerHeight() * 100) + "%" );
}

function updateEffects()
{
    for (var effectName in effects)
    {

    }
}