
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export default function Todo(){
    const [todos, setTodos]=useState([])
    const [completed, setCompleted]=useState(false)
    
function deleteTodo(id){
  setTodos(prev => prev.filter(todo => todo.id !== id))
}
    
const allTodos = todos
  .filter(todo => !todo.completed)
  .map(todo => (
    <div key={todo.id} className="flex justify-between">
      <label>
        <input type="checkbox" /> {todo.name}
      </label>

      <button onClick={()=>deleteTodo(todo.id)} className="text-[#ff2400]">
        <FontAwesomeIcon icon={faTrash}/>
      </button>
    </div>
  ));
    
    function handTodos(formData){
        let todo=formData.get('todo')
        setTodos(prev=>[...prev, {id:prev.length,
            name:todo,
            completed:false
        } ])
        //console.log(todo)
    }
 console.log(todos)
    return(
        <div className='h-100 w-200  '>
        <form action={handTodos}>
       <div className='flex justify-between p-4 px-9 rounded-4xl bg-gray-100 shadow-gray-500  shadow-sm'>
        <input className='focus:outline-none [&::-webkit-search-cancel-button]:appearance-none text-gray-700' type="search" name='todo' placeholder="Add todo..." /> <button className='bg-[#2caaa6] text-amber-50 rounded-full text-sm p-0.5'><FontAwesomeIcon icon={faPlus}/></button>
       </div>
       <fieldset className="flex flex-col px-9 py-5 text-gray-700">
        
       {allTodos}
       </fieldset>
        </form>
        </div>
    )
}