const btn=document.querySelector('button')
const inputElement=document.querySelector("input")
const ul=document.querySelector('ul')
let todoAry=[]

btn.addEventListener('click', ()=>{
    const obj={
        text:inputElement.value,
        completed:false,
        edit:false,
        id:new Date().getTime()
    }
    todoAry.push(obj)
    inputElement.value=''
    addTodo()
})

function addTodo(){
    ul.innerHTML=''
    todoAry.map(item=>(
        ul.innerHTML+=`<li>
        <span class='${item.completed && 'done'}'>${item.text}</span>
         <button onClick="deleteItem('${item.id}')">Delete</button>
                <button onClick="doneTodo('${item.id}')">Done</button>
                <button>Edit</button>
        </li>`
    ))
}

function deleteItem(id){
 todoAry= todoAry.filter(item=>item.id!=id)
 console.log(todoAry)
     addTodo()
}


function doneTodo(id){
    todoAry= todoAry.map(item=>item.id==id ? {...item, completed:true} : item)
    console.log(todoAry)
    addTodo()
}


