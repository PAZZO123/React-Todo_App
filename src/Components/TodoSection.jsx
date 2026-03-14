import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// todo component where all todo will be declared mnan

export default function TodoSection(props){
    return(<div  className="flex justify-between ">
      <label>
        <input className='peer'
        type="checkbox"
        />
        <span className='peer-checked:line-through pl-1.5'> {props.name}</span>
      </label>

      <button onClick={()=>props.deleteTodo(props.id)} className="text-[#ff2400]">
        <FontAwesomeIcon icon={faTrash}/>
      </button>
    </div>)
}