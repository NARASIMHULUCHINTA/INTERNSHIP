var mainheading = document.getElementById("main-heading");
var btn = document.getElementById("btn-click");
var tooglebutton = document.getElementById('toggle-icon');

mainheading.classList.add('big');

btn.addEventListener('click', function(){
    mainheading.classList.remove('big');
})

togglebutton.addEventListener('click',function(){
    if(sidebar.classList.Contains('show'))
    {
        sidebar.classList.remove('show');
        sidebar.classList.add('hide');
    }
    else
    {
        sidebar.classList.add('show');
        sidebar.classList.remove('hide');
    }
});
/*setTimeout(function() {
    mainheading.classList.remove('big');
}, 1500);*/


