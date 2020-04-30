// var h1Var = document.createElement('h1')
// var myValue = document.createTextNode("Hello World!");
// h1Var.appendChild(myValue)
//  document.querySelector('h1').appendChild(h1Var)

//while loop
// var val=5;
// while (val > 0) {
//     console.log(val);
//     val--;
    
// }

//TODO script-------------------------------------------------------

var ul = document.getElementById("list");
var li;

var addButton = document.getElementById("add");
addButton.addEventListener('click', addItem);


var removeButton = document.getElementById("remove");
removeButton.addEventListener('click', removeItem);

var removeAllButton = document.getElementById("removeAll");
removeAllButton.addEventListener('click', removeAllItem);



function addItem(){
//console.log("Add Button clicked");
var input = document.getElementById('input');
var item = input.value;
ul = document.getElementById("list");
var textnode = document.createTextNode(item);

if(item === '')
{
    
//     let sp1 = document.createElement('i');
// sp1.textContent ='Please enter your todo...!'
// let sp2 = document.getElementById("removeAll")
// let parentDiv = sp2.parentNode
// parentDiv.insertBefore(sp1, sp2.nextSibling)
    
        


}else{
    //create LI
    li = document.createElement('li');
    //li.setAttribute('class','mycheck')
    //create checkbox
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    checkbox.setAttribute("id","check");

    //create label
    var label = document.createElement('label');

    //add elements on web page
    ul.appendChild(label);
    li.appendChild(checkbox);
    label.appendChild(textnode);
    li.appendChild(label);

    ul.insertBefore(li, ul.childNodes[0]);
    
    setTimeout(() => {
       li.className = 'visual';
    }, 4);


    input.value='';

}
}


function removeItem(){
    //console.log("Remove Button clicked");
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while(li[index] && li[index].children[0].checked)
        {
            ul.removeChild(li[index])
        }
        
        
    }
    
}

function removeAllItem(){
   li = ul.children;
    for (let index = 0; index < li.length; index++) {
     ul.removeChild(li[index]);
    // ul.remove();
    }
}