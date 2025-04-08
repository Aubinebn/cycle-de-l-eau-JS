function setupEventListeners()
{
    $(document).click(onClickDocument);

    $('.amenagement .bulle-amenagement').click(onClickBulleAmenagement);

    $('.amenagement .toggle').click(toggleAmenagement);
}