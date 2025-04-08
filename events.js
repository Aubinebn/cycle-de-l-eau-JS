function setupEventListeners()
{
    $(document).click(hideAllModals);

    $('#nav').click(changeMilieu);

    $(document).on('click', '.amenagement .bulle-amenagement', onClickBulleAmenagement);
    $(document).on('click', '.amenagement .toggle', toggleAmenagement);

    $('.gui-effect .gui-effect-more').click(onClickGuiEffectMore);
}

function onClickGuiEffectMore()
{
    if (!$(this).hasClass('active'))
        return;

    let guiEffect = $(this).closest('.gui-effect');

    let moreElt = $('#gui-effect-more-info').show();
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