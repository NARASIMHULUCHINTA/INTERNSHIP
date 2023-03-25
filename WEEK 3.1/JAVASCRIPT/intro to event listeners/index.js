var btn = document.getElementById("btn-click");
var divi = document.querySelector("header div");

function onbtnclick()
{
    var randomnum = Math.floor(Math.random * 255); 
    divi.style.backgroundColor="rgb("+Math.floor(Math.random() * 255)+","+Math.floor(Math.random() * 255)+","+Math.floor(Math.random() * 255)+")"
}

//btn.onclick = onbtnclick();

btn.addEventListener('click',onbtnclick)