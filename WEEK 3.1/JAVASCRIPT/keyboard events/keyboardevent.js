document.body.addEventListener('keydown',function(e)
{
    var keycode = e.keyCode;
    if(keycode === 13 || keycode === 16)
    {
        console.log(keycode + 'keydown');
    }    
});

document.body.addEventListener('keyup',function(e)
{
    var keycode = e.keyCode;
    if(keycode === 13 || keycode === 16)
    {
        console.log(keycode + 'key up');
    }    
});

document.body.addEventListener('keypress',function(e)
{
    var keycode = e.keyCode;
    if(keycode === 13 || keycode === 16)
    {
        console.log(keycode + 'keypress');
    }    
});