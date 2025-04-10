function setupEventListeners()
{
    //$('body').click(logClickPos);

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

    for (let i in amenagements)
    {
        let amenagement = amenagements[i];

        if (amenagement.milieu != milieux[currentMilieu].name
            || !amenagement.active)
            continue;

        let modifier = amenagement.effects[effectName] | 0;

        if (modifier != 0)
            detail +=
                '<div class="gui-effect-detail-item ' + (modifier > 0 ? 'positive' : 'negative') + '">' +
                    amenagement.label +
                '</div>';
    }

    // moreElt.find('.gui-effect-label').text(label);

    moreElt.find('.gui-effect-detail').html(detail);

    return false;
}

function setupNavEventListeners()
{
    // $('#nav').click(changeMilieu);

    $('#nav').on('mousedown touchstart', (e) =>
    {
        mouseOffset = getPointerPos(e);
        mouseOffset.x -= $('#nav-current').position().left;
        mouseOffset.y -= $('#nav-current').position().top;

        mousePos = getPointerPos(e);

        isMouseDown = true;

        requestAnimationFrame(navDragEnterFrame);
    });

    $(document).on('mouseup touchend', () =>
    {
        isMouseDown = false;
    });
    // $(document).on('mouseleave touchleave', () => {
    //     isMouseDown = false;
    // });

    $(document).on('mousemove touchmove', (e) =>
    {
        if (!isMouseDown) return;

        mousePos = getPointerPos(e);
    });
};

function navDragEnterFrame()
{
    if (!isMouseDown)
        return;

    log('enter')

    //-- Déplace .nav-current pour suivre la souris, avec des bornes pour rester dans le nav
    let navElt = $('#nav');
    let navCurrentElt = navElt.find('#nav-current');
    let navPos = navElt.position();

    let newX = (mousePos.x) - mouseOffset.x;

    if (newX < 0)
        newX = 0;
    else if (newX > navElt.width() - navCurrentElt.width())
        newX = navElt.width() - navCurrentElt.width();

    navCurrentElt.css('left', newX);




    requestAnimationFrame(navDragEnterFrame);
}