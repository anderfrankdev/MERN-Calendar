import { useMemo } from "react";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { useUiStore } from "../../hooks/useUiStore";

export const EditEventButton = () => {
  const { activeEvent } = useCalendarStore();
  const {onOpenDateModal} = useUiStore()
  const visibility = useMemo(() => {
    return !activeEvent ? "hidden" : "block";
  }, [activeEvent]);
  return (
    <button
      onClick={() => {
        onOpenDateModal();
      }}
      type="button"
      className={`${visibility} w-16 h-16 flex justify-center items-center text-white absolute right-[calc(50%-48px)] bottom-4 hover:bg-yellow-800 focus:ring-4 focus:outline-nonefont-medium rounded-full text-sm p-2.5 text-center mr-2 bg-yellow-500`}
    >
      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z"/>
        <path d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z"/>
      </svg>
    </button>
  );
};
