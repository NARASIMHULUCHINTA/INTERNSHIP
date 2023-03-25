var list=document.getElementById('todo-list');
var btnadd = document.getElementById('add-item');
var text = document.getElementById('text');
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
 

function addlistitem()
{
    if(currentvalue !== undefined && currentvalue !== null && currentvalue !=='')
    {
        var newlistelement = document.createElement('li');
        var textnode = document.createTextNode(currentvalue);
        newlistelement.appendChild(textnode);
        newlistelement.id = 'item' + (list.childElementCount+1);

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

