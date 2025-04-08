var currentMilieu = 0;
var numMilieux = 3;
var jwindow = $(window);

var viewportScroll = $('#viewport-scroll');
var bg = viewportScroll.find('.bg');
var sceneWidth = bg.width();
var sceneHeight = bg.height();

var milieuxContainer = viewportScroll.find('#milieux');

init();

function init()
{
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
        milieuElt.css('left', sceneWidth * i);

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
            left: amenagement.x * sceneWidth / 100,
            top: amenagement.y * sceneHeight / 100
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
            left: pointInfo.x * sceneWidth / 100,
            top: pointInfo.y * sceneHeight / 100
        })

        milieuxContainer.find('.milieu-' + pointInfo.milieu).append(pointInfoElt);
    });
}