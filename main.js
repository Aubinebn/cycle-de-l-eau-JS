var currentScene = 0;
var numScenes = 3;
var jwindow = $(window);
var screenHeight = jwindow.height();
var screenWidth = jwindow.width();
var viewportScroll = $('#viewport-scroll');
var bg = viewportScroll.find('.bg');

var milieuxContainer = viewportScroll.find('#milieux');

init();

function init()
{
    bg.width(screenWidth*3);

    setupMilieux();
    setupAmenagements();
    setupPointsInfo();
    setupEventListeners();
}

function setupMilieux()
{
    milieux.forEach(function(milieu, i)
    {
        let milieuElt = $('<div class="milieu milieu-' + milieu.name + '"></div>');
        milieuElt.css('left', screenWidth * i);
        log(milieuElt);
        milieuxContainer.append(milieuElt);
    });
}

function setupAmenagements()
{
    amenagements.forEach(function(amenagement)
    {
        let amenagementElt = $(''
            + '<div class="amenagement">'
            +   '<h2>' + amenagement.label + '</h2>'
            +   '<h2>' + amenagement.label + '</h2>'
            + '</div>'
        );

        amenagementElt.css({
            left: amenagement.x * screenWidth / 100,
            top: amenagement.y * screenHeight / 100
        });

        milieuxContainer.find('.milieu-' + amenagement.milieu).append(amenagementElt);
    });
}

function setupPointsInfo()
{
    pointsInfo.forEach(function(pointInfo)
    {
        let pointInfoElt = $(''
            + '<div class="point-info">'
            +   '<h2>' + pointInfo.label + '</h2>'
            + '</div>'
        );

        pointInfoElt.css({
            left: pointInfo.x * screenWidth / 100,
            top: pointInfo.y * screenHeight / 100
        })

        milieuxContainer.find('.milieu-' + pointInfo.milieu).append(pointInfoElt);
    });
}