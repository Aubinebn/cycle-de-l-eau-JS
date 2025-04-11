function log()
{
    console.log.apply(null, arguments);
}

function isset(val)
{
    return typeof(val) != 'undefined';
}

function getPointerX(e)
{
    if (e.originalEvent && e.originalEvent.touches)
        return e.originalEvent.touches[0].pageX;
    else
        return e.pageX;
}

function getPointerY(e)
{
    if (e.originalEvent && e.originalEvent.touches)
        return e.originalEvent.touches[0].pageY;
    else
        return e.pageY;
}

function getPointerPos(e)
{
    let pos = {
        x: getPointerX(e),
        y: getPointerY(e)
    };

    return pos;
}

$.fn.extend({
    ensureLoad: function(handler) {
        return this.each(function() {
            if(this.complete) {
                handler.call(this);
            } else {
                $(this).load(handler);
            }
        });
    }
})