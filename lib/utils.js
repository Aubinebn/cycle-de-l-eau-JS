function log()
{
    console.log.apply(null, arguments);
}

function isset(val)
{
    return typeof(val) != 'undefined';
}