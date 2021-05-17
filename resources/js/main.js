var removedIcon = 'R'
var completeIcon = 'C'

// user clicked on the button
// if there is any text inside of the input, add that to the to do lists

document.getElementById('add').addEventListener('click',function(){
    var value = document.getElementById('item').value
    if(value){addItemTodo(value)}
    document.getElementById('item').value = ''
})


function removeItem(){
    var item = this.parentNode.parentNode
    var parent = item.parentNode
    parent.removeChild(item)
}


function completeItem(){
    var item = this.parentNode.parentNode
    var parent = item.parentNode
    var id = parent.id
// check the item should be added to the compeleted list or re-added to the todo list
    var target = (id === 'todo') ? document.getElementById('completed'): document.getElementById('todo');
    parent.removeChild(item)
    target.insertBefore(item,target.childNodes[0])
}

function addItemTodo(text){
var list = document.getElementById('todo')

var item = document.createElement('li')
item.innerText = text 


var buttons = document.createElement('div')
buttons.classList.add('buttons')



var remove = document.createElement('button')
remove.classList.add('remove')
remove.innerHTML = removedIcon
 
remove.addEventListener('click',removeItem) // addclick event to remove the todo lists


var complete = document.createElement('button')
complete.classList.add('complete')
complete.innerHTML = completeIcon

complete.addEventListener('click',completeItem)

buttons.appendChild(remove)
buttons.appendChild(complete)
item.appendChild(buttons)
list.appendChild(item)

list.insertBefore(item,list.childNodes[0]) // insert the item before the 1st index of the objects

}

