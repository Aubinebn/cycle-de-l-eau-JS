function log()
{
    console.log.apply(null, arguments);
}

function isset(val)
{
    return typeof(val) != 'undefined';
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