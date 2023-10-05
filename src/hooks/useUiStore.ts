import { useDispatch, useSelector } from "react-redux"
import { UiData, UiMethods } from "../types"
import { onCloseDateModal, onOpenDateModal } from "../store/ui/uiSlice"
export const useUiStore = () => {
    const { isDateModalOpen } = useSelector((state:any) => state.ui)
    
    const data:UiData = { isDateModalOpen }
    
    const dispatch = useDispatch()

    const methods:UiMethods = { 
        onOpenDateModal:()=>dispatch(onOpenDateModal()),
        onCloseDateModal:()=>dispatch(onCloseDateModal()) 
    }
    return {...data,...methods}
}