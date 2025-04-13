const btn=document.querySelector('button')
const inputElement=document.querySelector("input")
const ul=document.querySelector('ul')
let todoAry=[]

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

btn.addEventListener('click', ()=>{
    const obj={
        text:inputElement.value,
        completed:false,
        edit:false,
        id:new Date().getTime(),
        day:daysOfWeek[new Date().getDay()-1]
    }
    todoAry.push(obj)
    inputElement.value=''
    addTodo()
    console.log(obj)
})


function checkDay(){
    todoAry.map(item=>{
        item.day=="Saturday" && alert('Your Todo here')
    })
}

function addTodo(){
    ul.innerHTML=''
    todoAry.map(item=>(
        ul.innerHTML+=`<li>
      ${item.edit ? `<input value='${item.text}' class='todo' />` : `<span class='${item.completed && 'done'}'>${item.text}</span>`}
         <button onClick="deleteItem('${item.id}')">Delete</button>
                <button onClick="doneTodo('${item.id}')">Done</button>
                ${item.edit? (`<button onClick="saveTodo(${item.id})">Save</button>`) :`<button onClick="editTodo('${item.id}')">Edit</button>`}
        </li>`
    ))

    checkDay()
}

function deleteItem(id){
 todoAry= todoAry.filter(item=>item.id!=id)
 console.log(todoAry)
     addTodo()
}


function doneTodo(id){
    todoAry= todoAry.map(item=>item.id==id ? {...item, completed:!item.completed} : item)
    console.log(todoAry)
    addTodo()
}


function editTodo(id){
   todoAry= todoAry.map(item=>item.id==id?{...item, edit:true}:item )
   console.log(todoAry)
   addTodo()
}


function saveTodo(id){
    let todo=document.querySelector('.todo')
   todoAry= todoAry.map(item=>item.id==id?{...item, text:todo.value, edit:false}:item)
    addTodo()
}


