const totalWidth = 11520;
const totalHeight = 2160;

var currentMilieu = 0;
var isMouseDown = false;

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
// var navCurrent = $('#nav-current');
// var navStartX = navCurrent.position().left;

var milieuxContainer = viewportScroll.find('#milieux');

var amenagementList = [];

var nappeOpacity = 0;

init();

function init()
{
    //-- Aménagements = politiques de gestion + aménagements
    amenagementList = amenagementList.concat(amenagements);
    amenagementList = amenagementList.concat(politiquesGestion);

    setupMilieux();
    setupAmenagements();

    setupPointsInfo();
    setupEffects();

    // setupRain();

    setupEventListeners();

    $('#gui-temperature .gui-btn.active').click();
    $('#gui-rain .gui-btn.active').click();

    initComplete = true;

    updateEffects();

    requestAnimationFrame(updateNappe);
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
    amenagementList.forEach(function(amenagement)
    {
        let isPolitiqueGestion = amenagement.isPolitiqueGestion;

        //-- Images
        let imageElt = '';
        if (!isPolitiqueGestion)
        {
            imageElt += '<img src="img/' + amenagement.imageActive.path + '" class="image-active" ' +
                'style="left: ' + amenagement.imageActive.x + 'px; top: ' + amenagement.imageActive.y + 'px">';

            //-- Image focus : soit l'image "active", soit une image différente si imageFocus est passé en paramètre
            let imageFocus = isset(amenagement.imageFocus) ? amenagement.imageFocus : amenagement.imageActive;
                imageElt += '<img src="img/' + imageFocus.path + '" class="image-focus" ' +
                            'style="left: ' + imageFocus.x + 'px; top: ' + imageFocus.y + 'px">';

            //-- Image inactive
            if (isset(amenagement.imageInactive))
                imageElt += '<img src="img/' + amenagement.imageInactive.path + '" class="image-inactive" ' +
                        'style="left: ' + amenagement.imageInactive.x + 'px; top: ' + amenagement.imageInactive.y + 'px">';
        }

        //-- Class
        let amenagementClass = 'amenagement';
        if (isPolitiqueGestion)
            amenagementClass += ' politique-gestion';
        else
            amenagementClass += ' point-amenagement';
        
        //-- Position UI
        let amenagementUIClass = '';
        if (isset(amenagement.positionFiche))
            amenagementUIClass += amenagement.positionFiche;

        //-- Effets
        let amenagementEffects = '';
        if (isset(amenagement.effects))
        {
            let positiveEffects = '';
            let negativeEffects = '';
            for (var effectName in amenagement.effects)
            {
                let modifier = amenagement.effects[effectName].modifier;
                let effect = allEffects[effectName];
                let effectElt =
                        '<div class="amenagement-effect-item ' + (modifier > 0 ? 'positive' : 'negative') + '">' +
                        '<span class="effect-label">' + effect.label + '</span>' +
                        '</div>';

                if (modifier > 0)
                    positiveEffects += effectElt;
                else
                    negativeEffects += effectElt;
            }

            if (positiveEffects != '')
                amenagementEffects += '<div class="positive-effects amenagement-effects-inner">' + positiveEffects + '</div>';
            if (negativeEffects != '')
                amenagementEffects += '<div class="negative-effects amenagement-effects-inner">' + negativeEffects + '</div>';
        }
        
        let amenagementElt = $('' +
            '<div class="' + amenagementClass + '" data-label="' + amenagement.label + '">' +
                '<div class="amenagement-image">' +
                    imageElt +
                '</div>' +
                '<div class="amenagement-ui ' + amenagementUIClass + '">' +
                    '<div class="bulle-amenagement"></div>' +
                    '<div class="fiche-amenagement">' +
                        '<div class="fiche-amenagement-content">' +
                            '<h2 class="amenagement-name">' + amenagement.label + '</h2>' +
                            '<div class="amenagement-description">' + amenagement.description + '</div>' +
                            '<div class="amenagement-effects">' + amenagementEffects + '</div>' +
                            '<div class="toggle-button">' +
                                '<div class="toggle-on-text">Ajouter</div>' +
                                '<div class="toggle-off-text">Enlever</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>'
        );

        //-- Etat par défaut (actif/inactif)
        if (amenagement.active)
            amenagementElt.addClass('active');

        //-- Indicateurs des effets d'eau
        for (var effectName in amenagement.effects)
        {
            if (isset(amenagement.effects[effectName].indicator))
            {
                let indicator = amenagement.effects[effectName].indicator;

                let indicatorClass = 'effect-indicator effect-indicator-' + effectName;

                if (isset(indicator.inactiveIndicator) && indicator.inactiveIndicator)
                        indicatorClass += ' inactive-indicator';
                else
                        indicatorClass += ' active-indicator';

                let indicatorElt = $('' +
                        '<div class="' + indicatorClass +'">' +
                            '<div class="effect-indicator-img"></div>' +
                        '</div>');

                indicatorElt.css({
                    left: indicator.x + 'px',
                    top: indicator.y + 'px'
                });

                indicatorElt.appendTo(amenagementElt);

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
        let position = '';
        if (isset(pointInfo.positionFiche))
            position += pointInfo.positionFiche;

        let pointInfoElt = $('' +
            '<div class="point-info amenagement" data-label="' + pointInfo.label + '">' +
                '<div class="amenagement-ui ' + position + '">' +
                    '<div class="bulle-amenagement"></div>' +
                    '<div class="fiche-amenagement">' +
                        '<div class="fiche-amenagement-content">' +
                            '<h2 class="amenagement-name">' + pointInfo.label + '</h2>' +
                            '<div class="amenagement-description">' + pointInfo.description + '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>'
        );

        //-- Place l'ui
        pointInfoElt.find('.amenagement-ui').css({
            left: getSceneX(pointInfo.x) + getMilieuIndex(pointInfo.milieu) * sceneWidth,
            top: getSceneY(pointInfo.y)
        });

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