import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface datapickerParams {
  id: string;
  name: string;
  onInputChange: any;
  value: Date;
  minDate: Date;
}

export const Datepicker = ({minDate, id, name,onInputChange, value }:datapickerParams ) => {
  
  const onChange =(date:Date)=>{
    onInputChange(date,{target:{name,value:date.toLocaleString()}})
  }
  
  return (
    <DatePicker
      onChange={onChange}
      name={name}
      value={value.toLocaleString()}
      id={id}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      showTimeSelect
      dateFormat="Pp"
      selected={value}
      minDate={minDate}
    />
  );
};
