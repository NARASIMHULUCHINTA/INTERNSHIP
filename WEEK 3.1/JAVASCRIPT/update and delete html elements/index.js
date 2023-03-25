var list=document.getElementById('todo-list');
var btnadd = document.getElementById('add-item');
var text = document.getElementById('text');
var btnupdate = document.getElementById('update-item');
var btnremove = document.getElementById('remove-item');

//var firstitem = document.getElementById('item1');


/*btnadd.addEventListener('click',function()
{
    var newlistelement = document.createElement('li');
    var textnode = document.createTextNode('list item ' + (list.childElementCount+1));
    newlistelement.appendChild(textnode);
    newlistelement.id = 'item'+(list.childElementCount+1);

    var firstitem = list.firstElementChild;
    //list.appendChild(newlistelement);
    list.insertBefore(newlistelement,firstitem);
});*/


let currentvalue;
text.addEventListener('input',function(event)
{
    currentvalue = event.target.value; 
});

text.addEventListener('keyup',function(e)
{
    if(e.keyCode === 13)
    {
        addlistitem();
    }
});
 
function createnewnode()
{
    var newlistelement = document.createElement('li');
    var textnode = document.createTextNode(currentvalue);
    newlistelement.appendChild(textnode);
    newlistelement.id = 'item' + (list.childElementCount+1);

    return newlistelement;
}

function addlistitem()
{
    if(currentvalue !== undefined && currentvalue !== null && currentvalue !=='')
    {
        var newlistelement = createnewnode();

        list.appendChild(newlistelement);
    
        text.value='';
        currentvalue='';
    }
    else
    {
        alert('please enter a valid item');
    }  
}

btnadd.addEventListener('click',addlistitem);

btnupdate.addEventListener('click',function()
{
    var firstElement = list.firstElementChild;
    var newlistelement = createnewnode();

    list.replaceChild(newlistelement,firstElement);
});

btnremove.addEventListener('click',function()
{
    var firstElement = list.firstElementChild;

    list.removeChild(firstElement);
});