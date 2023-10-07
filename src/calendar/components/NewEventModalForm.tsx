import { Datepicker } from "./DatePicker"
import styles from "./CreateEventModal.module.css";
import { useEffect, useState } from "react";
import { EventStruc } from "../../types";
import { onNewEventInputChange } from "../events/onNewEventInputChange";
import { newDefaultEvent } from "../data/newEvent";
import { useCalendarStore } from "../../hooks/useCalendarStore";

export const NewEventModalForm = ()=>{
    const {activeEvent} = useCalendarStore()

    const [formValues, setFormValues] = useState<EventStruc>(newDefaultEvent)
    const { startSavingEvent, startUpdatingEvent } = useCalendarStore()
 
    useEffect(()=>{
      if(!!activeEvent) setFormValues({...activeEvent})
      if(!!!activeEvent) setFormValues(newDefaultEvent)
    },[activeEvent])
    
    return (
        <form action="#">
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="start"
                  className={`${styles.label} block mb-2 text-sm font-medium text-gray-900 dark:text-white`}
                >
                  Start datetime
             </label>
             <Datepicker minDate={new Date()} id="start" value={new Date(formValues.start)} onInputChange={onNewEventInputChange({formValues,setFormValues})} name="start" />
           </div>
           <div>
             <label
               htmlFor="end"
               className={`${styles.label} block mb-2 text-sm font-medium text-gray-900 dark:text-white`}
             >
               End datetime
             </label>
             <Datepicker minDate={new Date(formValues.start)} id="end" value={new Date(formValues.end)} onInputChange={onNewEventInputChange({formValues,setFormValues})} name="end" />
           </div>
           <div className="col-span-2">
             <label
               htmlFor="title"
               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
             >
               Title
             </label>
             <input
               onChange={onNewEventInputChange({formValues,setFormValues},undefined)}
               value={formValues.title}
               type="text"
               name="title"
               id="title"
               className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
               placeholder="Title"
               required
             />
           </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              onChange={onNewEventInputChange({formValues,setFormValues},undefined)}
              id="notes"
              rows={5}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Write a description..."
              name="notes"
              value={formValues.notes}
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault()
              const newEvent = JSON.parse(JSON.stringify(formValues))
              if(!!!activeEvent){
                newEvent.id = new Date().getTime()
                startSavingEvent(newEvent)
              }
              if(!!activeEvent)
                startUpdatingEvent(newEvent);
              
              setFormValues(newDefaultEvent);

            }}
            className="text-white bg-blue-800 inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            <svg
              className="mr-1 -ml-1 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            Add new event
          </button>
        </div>
        </form>
    )
}