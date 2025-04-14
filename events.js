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

    $(document).on('mousemove touchmove', (e) =>
    {
        if (!isMouseDown) return;

        mousePos = getPointerPos(e);

        navTargetX = (mousePos.x) - mouseOffset.x;

        // borne le x a un multiple de nav width / 3
        let milieuWidth = nav.width() / numMilieux;
        let milieuIndex = Math.round(navTargetX / milieuWidth);

        navTargetX = milieuIndex * milieuWidth;

        //-- Borne les valeurs à la largeur du nav
        if (navTargetX < 0)
            navTargetX = 0;
        else if (navTargetX > nav.width() - navCurrent.width())
            navTargetX = nav.width() - navCurrent.width();
    });
};

function navDragEnterFrame()
{
    let currentX = navCurrent.position().left;
    let newX = currentX + (navTargetX - currentX) * 0.1;

    //-- Ajoute un effet de magnétisme sur les milieux
    // let milieuWidth = navElt.width() / numMilieux;
    // let milieuIndex = Math.floor(newX / (nav.width() / numMilieux));
    // let milieuStartX = milieuIndex * milieuWidth;
    // let milieuEndX = milieuStartX + milieuWidth;

    navCurrent.css('left', newX)

    //-- Déplace le background-position pour donner l'illusion de glisser
    navCurrent.css('background-position-x', navStartX - newX);

    // if (milieuIndex != currentMilieu)
    //     changeMilieu(milieuIndex);

    if (!isMouseDown && Math.abs(newX - currentX) < 0.05)
        return;

    requestAnimationFrame(navDragEnterFrame);
}