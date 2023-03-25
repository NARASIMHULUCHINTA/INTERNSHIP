console.log('js loaded')

var countdownelement = document.getElementById("countdown");
var intialcountdownval = countdownelement.innerHTML;
var bgimage = document.getElementById("bg-image");


var interval = setInterval(function() {
    intialcountdownval = intialcountdownval > 0 ? intialcountdownval - 1 : 0;
    countdownelement.innerHTML = intialcountdownval;
    
    countdownelement.style.fontSize = intialcountdownval * 30 +"px";

    bgimage.style.width = intialcountdownval * 10 +"%";
    console.log(intialcountdownval*30+"px");

    if(intialcountdownval <= 0)
    {
        clearInterval(interval);
    }
    
}, 1000);