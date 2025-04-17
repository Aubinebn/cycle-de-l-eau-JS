function setupEventListeners()
{
    $(document).click(hideAllModals);

    setupNavEventListeners();

    $(document).on('click', '.amenagement .bulle-amenagement', onClickBulleAmenagement);
    $(document).on('click', '.amenagement .toggle-button', toggleAmenagement);

    $('.gui-effect .gui-effect-more').click(onClickGuiEffectMore);

    $('#gui-temperature .gui-btn').click(onClickTemperatureBtn);
    $('#gui-rain .gui-btn').click(onClickRainBtn);
}

function onClickGuiEffectMore()
{
    if (!$(this).hasClass('active'))
        return;

    let guiEffect = $(this).closest('.gui-effect');

    let moreElt = $('#gui-effect-more-info').addClass('visible');
    moreElt.css('top', guiEffect.position().top / viewportScaleRatio);

    let effectName = guiEffect.data('name');

    let label = guiEffect.find('.gui-effect-label').text();
    let detail = '';

    for (let i in amenagementList)
    {
        let amenagement = amenagementList[i];

        if (amenagement.milieu != milieux[currentMilieu].name
            || !amenagement.active)
            continue;
        
        if (isset(amenagement.effects[effectName]))
        {
            let modifier = amenagement.effects[effectName].modifier;
            detail +=
                    '<div class="gui-effect-detail-item ' + (modifier > 0 ? 'positive' : 'negative') + '">' +
                        amenagement.label +
                    '</div>';
        }
    }

    // moreElt.find('.gui-effect-label').text(label);

    moreElt.find('.gui-effect-detail').html(detail);

    return false;
}

function setupNavEventListeners()
{
    $('#nav').on('mousedown touchstart', (e) =>
    {
        isMouseDown = true;
    });

    $(document).on('mouseup touchend', () =>
    {
        isMouseDown = false;
    });

    $(document).on('mousemove touchmove', (e) =>
    {
        if (!isMouseDown) return;

        let mousePos = getPointerPos(e);
        let mouseInNavPos = mousePos.x - nav.offset().left;

        let milieuWidth = nav.width() / numMilieux;
        let mouseMilieuIndex = Math.floor(mouseInNavPos / milieuWidth / viewportScaleRatio);

        //-- borne au nombre de milieux
        mouseMilieuIndex = Math.max(0, Math.min(numMilieux - 1, mouseMilieuIndex));

        if (currentMilieu !== mouseMilieuIndex)
            changeMilieu(mouseMilieuIndex);
    });
}