const searchItem = document.querySelector('#search input')
const itemList = document.getElementById('to_do_items')
const addItem = document.getElementById('add_item')

searchItem.addEventListener('keyup', () => {
    let toDoItem = searchItem.value.trim().toLowerCase();
    console.log(toDoItem)
    searchItems(toDoItem)
    // const listElements = Array.from(itemList.children)
    // console.log(listElements)
    // const lists = listElements.filter(list => !list.textContent.includes(toDoItem))
    // lists.forEach(list => list.classList.add('hidden'))
})

//search functionality
function searchItems(toDoItem){
    Array.from(itemList.children)
    .filter(list => !list.textContent.toLowerCase().includes(toDoItem))
    .forEach(list => list.classList.add('hidden'))

    Array.from(itemList.children)
    .filter(list =>  list.textContent.toLowerCase().includes(toDoItem))
    .forEach(list => list.classList.remove('hidden'))
}

//add functionality

addItem.addEventListener('submit',e=>{
    e.preventDefault()
    // console.log(addItem.addedItem.value)
    const itemToAdd = addItem.addedItem.value.trim()
    if(itemToAdd.length){
        addingItem(itemToAdd)
    }
    addItem.reset()
})

function addingItem(itemToAdd){
    const newTodo = `
    <li
              class="border-2 border-red-600 bg-red-600 px-2 mb-4 flex justify-between text-cyan-100"
    >
              <span>${itemToAdd}</span>
              <i class="fa-solid fa-trash mt-1"></i>
    </li>
    `

    itemList.innerHTML += newTodo
}

//delete functionality

itemList.addEventListener('click', e=>{
    if(e.target.classList.contains('fa-trash')){
        e.target.parentElement.remove();
    }
})