var loginform = document.getElementById('login-form');
username.addEventListener('input',function(event)
{
    var currentvalue = event.target.value;
    currentvalue = currentvalue.toUpperCase();
    console.log(currentvalue);
    username.value = currentvalue;
})

username.addEventListener('focus',function()
{
    console.log("element focused");
})

username.addEventListener('blur',function()
{
    console.log("element lost focus");
})

loginform.addEventListener('submit',function(e)
{
   alert("submit button clicked");
   e.preventDefault();
})