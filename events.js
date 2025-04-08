function setupEventListeners()
{
    $('body').click(changeMilieu);

    $('.amenagement .bulle-amenagement').click(onClickBulleAmenagement);
}

function onClickBulleAmenagement()
{
    let bulle = $(this);
    let amenagement = bulle.closest('.amenagement');
    let ficheAmenagement = amenagement.find('.fiche-amenagement');

    bulle.toggleClass('active').attr('src');
    ficheAmenagement.toggleClass('active');
}