var btndecreasefont = document.getElementById('btn-decrease');
var btnincreasefont = document.getElementById('btn-increase');
var mainheading = document.getElementById('main-heading');
var initialfontsize = window.getComputedStyle(mainheading).fontSize;
initialfontsize = parseInt(initialfontsize.substr(0,(initialfontsize.length-2)));

console.log(btnincreasefont.style.marginRight); 
console.log(window.getComputedStyle(btndecreasefont).marginRight);
console.log(window.getComputedStyle(mainheading).fontSize);
  
mainheading.style.fontSize = parseInt(initialfontsize) + 100 +'px'; 


btnincreasefont.onclick = function()
{
    initialfontsize += 10 ;
    mainheading.style.fontSize = initialfontsize + 'px';
}

btndecreasefont.addEventListener('click' , function()
{
    initialfontsize -= 10 ;
    mainheading.style.fontSize = initialfontsize + 'px';
})