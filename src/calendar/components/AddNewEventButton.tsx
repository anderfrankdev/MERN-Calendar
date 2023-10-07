import { useCalendarStore } from "../../hooks/useCalendarStore"
import { useUiStore } from "../../hooks/useUiStore"

export const AddNewButton = ()=>{

    const {onOpenDateModal } = useUiStore()
    const { onSetActiveEvent } = useCalendarStore()
    return (
    <button onClick={()=>{
        onSetActiveEvent(null)
        onOpenDateModal()
    }} type="button" className="w-16 h-16 flex justify-center items-center text-white absolute right-4 bottom-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        
        <span className="text-3xl font-light">+</span>
    </button>
    )
}