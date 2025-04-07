function setupEventListeners()
{
    $('body').click(switchScene);
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
    log('x = ' + ((e.pageX - offset.left) / $(this).outerWidth() * 100) + '% , y = ' + ((e.pageY - offset.top) / $(this).outerHeight() * 100) + "%" );
}