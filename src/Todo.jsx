import Search from './Components/SearchBox';
import TodoSection from './Components/TodoSection';

import { useState } from 'react';

export default function Todo(){
    const [todos, setTodos]=useState([])
    //const [completed, setCompleted]=useState(false)
    
function deleteTodo(id){
  setTodos(prev => prev.filter(todo => todo.id !== id))
}
    
const allTodos = todos
  .filter(todo => !todo.completed)
  .map(todo => (<TodoSection
           key={todo.id}
           id={todo.id}
           deleteTodo={deleteTodo}
           name={todo.name}
    />
    
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
         <Search/>
       <fieldset className="flex flex-col px-9 py-5 text-gray-700">
        
       {allTodos}
       </fieldset>
        </form>
        </div>
    )
}