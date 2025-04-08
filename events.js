function setupEventListeners()
{
    $('body').click(changeMilieu);

    $('.amenagement .bulle-amenagement').click(onClickBulleAmenagement);

    $('.gui-effect .gui-effect-more').click(onClickGuiEffectMore);
}

function onClickBulleAmenagement()
{
    let bulle = $(this);
    let amenagement = bulle.closest('.amenagement');
    let ficheAmenagement = amenagement.find('.fiche-amenagement');

    bulle.toggleClass('active').attr('src');
    ficheAmenagement.toggleClass('active');

    return false;
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