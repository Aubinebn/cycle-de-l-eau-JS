function setupEventListeners()
{
    $('body').click(switchScene);

    $('.amenagement .bulle-amenagement').click(onClickBulleAmenagement);
}

function switchScene(e)
{
    log('switch');

    currentScene++;

    if (currentScene >= numScenes)
        currentScene = 0;

    // viewportScroll.animate({
    //     left:-currentScene * screenWidth
    // });

    var offset = $(this).offset();
    log('x = ' + ((e.pageX - offset.left) / sceneWidth * 100) + '% , y = ' + ((e.pageY - offset.top) / bg.height() * 100) + "%" );
}

function onClickBulleAmenagement()
{
    let bulle = $(this);
    let amenagement = bulle.closest('.amenagement');
    let ficheAmenagement = amenagement.find('.fiche-amenagement');

    bulle.toggleClass('active').attr('src');
    ficheAmenagement.toggleClass('active');
}