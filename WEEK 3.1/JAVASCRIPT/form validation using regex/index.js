var username = document.getElementById('username');
var loginform = document.getElementById('input-wrapper');
var usernameerr = document.getElementById('username-err');

username.addEventListener('input',function(e)
{
    var pattern = /^[\w]{6,8}$/;
    var currentvalue = e.target.value;
    var valid = pattern.test(currentvalue);

    if(valid)
    {
        usernameerr.style.display ='none'
    }
    else
    {
        usernameerr.style.display ='block'
    }
});