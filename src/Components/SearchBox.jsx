import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Search(){
    return( <div className='flex justify-between p-4 px-9 rounded-4xl bg-gray-100 shadow-gray-500  shadow-sm'>
        <input className='focus:outline-none [&::-webkit-search-cancel-button]:appearance-none text-gray-700 w-100' type="search" name='todo' placeholder="Add todo..." /> <button className='bg-[#2caaa6] text-amber-50 rounded-full text-sm p-0.5'><FontAwesomeIcon icon={faPlus}/></button>
       </div>)
}