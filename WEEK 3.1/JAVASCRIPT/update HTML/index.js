console.log('js loaded')

var countdownelement = document.getElementById('countdown');
var initialcountdownval = countdownelement.innerHTML;
var bgimgelement = document.getElementById('bg-image');


setInterval(function() {
    initialcountdownval = initialcountdownval > 0 ? initialcountdownval -=1 :0;
    countdownelement.innerHTML= initialcountdownval;
    var backimgpath= initialcountdownval % 2 === 0 ? '1674459335848.jpg' : '1651470140590.jpg'

    bgimgelement.src=backimgpath;
}, 1000);

