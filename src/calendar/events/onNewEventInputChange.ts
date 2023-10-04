import { addHours } from "date-fns";
import { curry } from "ramda";

export const onNewEventInputChange =curry((form:any,e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>,date?:Date,) => {
        const { name, value } = e.target;
        const {formValues,setFormValues} = form
        
        const isStartOrEndDate = (name==="start"||name==="end")
        const isSettingEndAfterStart = !!date&&name==="end"&&(date?.getTime()-formValues.start.getTime())>0
        const isSettingStart = !!date&&name==="start"
        
        if(!isStartOrEndDate)
            return setFormValues({ ...formValues, [name]: value });

        if(isSettingEndAfterStart)
            return setFormValues({ ...formValues, [name]: date });

        if(isSettingStart) {
            setFormValues({ ...formValues, [name]: date })
            if((date?.getTime()-formValues.start.getTime())>0)
                setFormValues({ ...formValues, ["end"]: addHours(date,2),[name]: date })            
        }
    })