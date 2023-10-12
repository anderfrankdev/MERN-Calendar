import { useMemo } from "react";
import { useCalendarStore } from "../../hooks/useCalendarStore";

export const DeleteEventButton = () => {
  const { startDeletingEvent, activeEvent } = useCalendarStore();
  const visibility = useMemo(() => {
    return !activeEvent ? "hidden" : "block";
  }, [activeEvent]);
  return (
    <button
      onClick={() => {
        startDeletingEvent();
      }}
      type="button"
      className={`${visibility} w-16 h-16 flex justify-center items-center text-white absolute left-4 bottom-4 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800`}
    >
      <svg
        className="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 20"
      >
        <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
      </svg>
    </button>
  );
};
