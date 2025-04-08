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

function onClickBulleAmenagement()
{
    let bulle = $(this);
    let amenagement = bulle.closest('.amenagement');

    amenagement.hasClass('focus') ? unfocusAmenagement() : focusAmenagement(amenagement);

    return false;
}

function unfocusAmenagement()
{
    let amenagement = $('.amenagement.focus')
    amenagement.removeClass('focus');
    $('.bulle-amenagement').removeClass('light');
}

function focusAmenagement(amenagement)
{
    //-- Enleve d'abord le focus si il est présent sur un autre aménagement
    unfocusAmenagement();

    //-- Met le focus sur l'aménagement
    amenagement.addClass('focus');

    //-- Baisse l'opacité des autres bulles
    $('.bulle-amenagement').addClass('light');
    amenagement.find('.bulle-amenagement').removeClass('light');
}

function toggleAmenagement()
{
    let amenagement = $(this).closest('.amenagement');

    amenagement.toggleClass('active');

    return false;
}

function onClickDocument()
{
    //-- On ferme les fiches d'aménagement ouvertes
    unfocusAmenagement();
}