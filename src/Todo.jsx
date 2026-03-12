
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Todo(){

    return(
        <div className='h-100 w-200  '>
        <form action="">
       <div className='flex justify-between p-2 px-7 rounded-4xl bg-gray-100git  shadow-2xl'>
        <input type="search" placeholder="Add todo..." /> <button className='bg-[#2caaa6] text-amber-50 rounded-full text-sm p-0.5'><FontAwesomeIcon icon={faPlus}/></button>
       </div>
       <fieldset className="flex flex-col">
        <legend> Todo Task</legend>
       <div className='flex justify-between '><label htmlFor=""><input type="checkbox" name="" id="" /> I am here </label>      <button className='text-[#ff2400] '><FontAwesomeIcon icon={faTrash}/></button>   </div>
        <div className='flex justify-between '><label htmlFor=""><input type="checkbox" name="" id="" /> I wii be in theGym </label>      <button className='text-[#ff2400] '><FontAwesomeIcon icon={faTrash}/></button>   </div>
         <div className='flex justify-between '><label htmlFor=""><input type="checkbox" name="" id="" /> I will go for lunch </label>      <button className='text-[#ff2400] '><FontAwesomeIcon icon={faTrash}/></button>   </div>
          <div className='flex justify-between '><label htmlFor=""><input type="checkbox" name="" id="" /> I will be for dinner as well </label>      <button className='text-[#ff2400] '><FontAwesomeIcon icon={faTrash}/></button>   </div>
       
       </fieldset>
        </form>
        </div>
    )
}