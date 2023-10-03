import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const Datepicker = ({ id, name }: { id: string; name: string }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      name={name}
      id={id}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      showTimeSelect
      dateFormat="Pp"
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
    />
  );
};
