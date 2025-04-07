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
    log('x = ' + ((e.pageX - offset.left) / sceneWidth * 100) + '% , y = ' + ((e.pageY - offset.top) / bg.height() * 100) + "%" );
}