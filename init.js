const totalWidth = 11520;
const totalHeight = 2160;

var currentMilieu = 0;
var isMouseDown = false;
var navTargetX = 0;
var mouseOffset = { x: 0, y: 0 };
var mousePos = { x: 0, y: 0 };

var numMilieux = 3;
var sceneWidth = totalWidth / numMilieux;
var sceneHeight = totalHeight;

var initComplete = false;

var currentTemperature;
var currentRain;

var jwindow = $(window);
var jbody = $('body');
var viewport = $('#viewport');
var viewportScroll = $('#viewport-scroll');
var viewportScaleRatio = getViewportScaleRatio();
var bg = viewportScroll.find('.bg');
var nav = $('#nav');
var navCurrent = $('#nav-current');
var navStartX = navCurrent.position().left;

var milieuxContainer = viewportScroll.find('#milieux');

init();

function init()
{
    setupMilieux();
    setupAmenagements();

    // setupPointsInfo();
    setupEffects();

    setupRain();

    setupEventListeners();

    $('#gui-temperature .gui-btn.active').click();
    $('#gui-rain .gui-btn.active').click();

    initComplete = true;

    updateEffects();
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
    let i = 0;
    amenagements.forEach(function(amenagement)
    {
        //-- Crée un élément d'aménagement (bulle et fiche)
        let inactiveImg = "";
        if (isset(amenagement.imageInactive))
            inactiveImg += '<img src="img/amenagements/' + amenagement.imageInactive + '" class="image-inactive">';

        //-- Image focus : soit l'image "active", soit une image différente si imageFocus est passé en paramètre
        let focusImg = amenagement.imageActive;
        if (isset(amenagement.imageFocus))
                focusImg = amenagement.imageFocus;

        let amenagementElt = $('' +
            '<div class="amenagement" data-label="' + amenagement.label + '">' +
                '<div class="amenagement-image">' +
                    '<img src="img/amenagements/' + amenagement.imageActive + '" class="image-active">' +
                    '<img src="img/amenagements/' + focusImg + '" class="image-focus">' +
                    inactiveImg +
                '</div>' +
                '<div class="amenagement-ui">' +
                    '<div class="bulle-amenagement"></div>' +
                    '<div class="fiche-amenagement">' +
                        '<div class="fiche-amenagement-content">' +
                            '<h2 class="amenagement-name">' + amenagement.label + '</h2>' +
                            '<div class="amenagement-description">' + amenagement.description + '</div>' +
                            '<div class="toggle-button">' +
                                '<div class="toggle-on-text">Ajouter</div>' +
                                '<div class="toggle-off-text">Enlever</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>'
        );

        if (amenagement.active)
            amenagementElt.addClass('active');

        //-- Indicateurs des effets d'eau
        for (var effectName in amenagement.effects)
        {
            if (isset(amenagement.effects[effectName].indicator))
            {
                let indicator = amenagement.effects[effectName].indicator;

                let indicatorElt = $('<div class="effect-indicator effect-indicator-' + effectName + '"><div class="effect-indicator-img"></div></div>').appendTo(amenagementElt);
                indicatorElt.css({
                    left: getSceneX(indicator.x) + amenagement.milieu,
                    top: getSceneY(indicator.y)
                });

                if (isset(indicator.image))
                    indicatorElt.append('<img class="effect-indicator-image" src="' + indicator.image + '" />');
            }
        }

        //-- Référence à l'aménagement dans l'objet jQuery
        amenagementElt.data('amenagement', amenagement);

        //-- Référence à l'objet jQuery dans l'aménagement
        amenagement.elt = amenagementElt;

        //-- Place l'ui
        amenagementElt.find('.amenagement-ui').css({
            left: getSceneX(amenagement.x) + getMilieuIndex(amenagement.milieu) * sceneWidth,
            top: getSceneY(amenagement.y)
        });

        //-- Ajoute l'élément d'aménagement dans le bon milieu
        milieuxContainer.find('.milieu-' + amenagement.milieu).append(amenagementElt);

        i++;
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

function setupEffects()
{
    Object.keys(effects.progress).forEach(setupEffectProgress);
    Object.keys(effects.score).forEach(setupEffectScore);
}

function setupEffectProgress(effectName)
{
    let effect = effects.progress[effectName];

    let effectElt =
        '<div class="gui-effect gui-effect-' + effectName + '" data-name="' + effectName + '">' +
            '<div class="gui-label">' + effect.label + '</div>' +
            '<div class="gui-effect-bar-container">' +
                '<div class="gui-effect-bar">' +
                    '<div class="gui-effect-bar-bg"></div>' +
                    '<div class="gui-effect-bar-progress"></div>' +
                    '<!--<svg class="gui-effect-bar-progress" xmlns="http://www.w3.org/2000/svg" width="218" height="32" viewBox="0 0 218 32" fill="none">' +
                        '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4027 0H210V32H11.4027C5.10517 32 0 24.8366 0 16C0 7.16344 5.10517 0 11.4027 0Z" fill="url(#paint0_linear_236_1252)"/>' +
                        '<ellipse cx="210" cy="16" rx="8" ry="16" fill="#8AD4E3"/>' +
                        '<ellipse cx="210" cy="16" rx="8" ry="16" fill="#7BE29F"/>' +
                        '<defs>' +
                            '<linearGradient id="paint0_linear_236_1252" x1="0" y1="16" x2="210" y2="16" gradientUnits="userSpaceOnUse">' +
                            '<stop stop-color="#7BE29F"/>' +
                            '<stop offset="1" stop-color="#ADEDC4"/>' +
                        '</linearGradient>' +
                        '</defs>' +
                    '</svg>-->' +
                '</div>' +
                '<div class="gui-effect-more">?</div>' +
            '</div>' +
        '</div>';

    $('#gui-effects-progress').append(effectElt);
}

function setupEffectScore(effectName)
{
    let effect = effects.score[effectName];

    let effectElt =
        '<div class="gui-effect gui-effect-' + effectName + '" data-name="' + effectName + '">' +
            '<div class="gui-label">' + effect.label + '</div>' +
            '<div class="gui-effect-bar-container">' +
                '<div class="gui-effect-bar">' +
                    '<img class="gui-effect-bar-bg" src="img/effect-bar-quality-bg.svg" />' +
                    '<img class="gui-effect-bar-score" src="img/effect-bar-quality-progress.svg" />' +
                '</div>' +
                '<div class="gui-effect-more">?</div>' +
            '</div>' +
        '</div>';

    $('#gui-effects-score').append(effectElt);
}

function getViewportScaleRatio()
{
    return parseFloat($('#viewport').css('transform').replace(/\(|\)|scale/g,'').split(',')[3]);
}

function setupRain()
{
    let rainLow = {
        "particles": {
            "number": {
                "value": 80, "density": {"enable": true, "value_area": 800}
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "image",
                "stroke": {"width": 0},
                "polygon": {"nb_sides": 5},
                "image": {"src": "img/rain-low.png", "width": 100, "height": 300}
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}
            },
            "line_linked": {"enable": false},
            "move": {
                "enable": true,
                "speed": 50,
                "direction": "bottom",
                "random": true,
                randomMin: 0.3,
                randomMax: 1,
                "straight": true,
                "out_mode": "out",
                "bounce": false,
                "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
            }
        },
    };

    let rainHigh = jQuery.extend(true, {}, rainLow);
    rainHigh.particles.number.value = 400;
    rainHigh.particles.shape.image.src = 'img/rain-high.png';

    particlesJS("rain-low", rainLow);
    particlesJS("rain-high", rainHigh);

    stopRain();
}


function getSceneX(xPercent)
{
    return xPercent * sceneWidth / 100;
}

function getSceneY(yPercent)
{
    return yPercent * sceneHeight / 100;
}

function getMilieuIndex(milieuName)
{
    for (let i = 0; i < milieux.length; i++) {
        if (milieux[i].name === milieuName) {
            return i;
        }
    }
}