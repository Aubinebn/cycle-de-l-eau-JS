var currentMilieu = 0;
var numMilieux = 3;
var jwindow = $(window);

var viewportScroll = $('#viewport-scroll');
var bg = viewportScroll.find('.bg');
var sceneWidth = bg.width() / numMilieux;
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
        //-- Crée un élément d'aménagement (bulle et fiche)
        let amenagementElt = $('' +
            '<div class="amenagement">' +
                '<div class="bulle-amenagement"></div>' +
                '<div class="fiche-amenagement">' +
                    '<div class="fiche-amenagement-content">' +
                        '<h2 class="amenagement-name">' + amenagement.label + '</h2>' +
                        '<div class="amenagement-description">' + amenagement.description + '</div>' +
                        '<div class="amenagement-toggler">' +
                            '<div class="toggle off">Inactif</div>' +
                            '<div class="toggle on">Actif</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>'
        );

        amenagementElt.css({
            left: amenagement.x * sceneWidth / 100,
            top: amenagement.y * sceneHeight / 100
        });

        //-- Ajoute l'élément d'aménagement dans le bon milieu
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