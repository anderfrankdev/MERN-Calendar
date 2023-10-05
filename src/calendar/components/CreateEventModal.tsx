import { useMemo } from "react";
import { ModalHeader } from "./ModalHeader";
import { NewEventModalForm } from "./NewEventModalForm";

export const CreateEventModal = ({isModalOpen, onCloseModal, title ,action }: any) => {
  const forms:any = {
    newEvent: <NewEventModalForm/>,
  }
  const modalVisibility = useMemo(()=>{
    return isModalOpen ? 'block' : 'hidden'
  },[isModalOpen])
  
  return (
    <div
      id="updateProductModal"
      tabIndex={-1}
      aria-hidden="true"
      className={`${modalVisibility} flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal h-full`}
    >
      <div className="relative p-4 w-full max-w-2xl h-auto">
        {/* Modal content */}
        <div className="relative p-4 bg-slate-50 rounded-lg shadow-2xl border border-gray-300 dark:border-none dark:bg-gray-800 sm:p-5">
          {/* Modal header */}
          <ModalHeader title={title} onCloseModal={onCloseModal}/>
          {/* Modal body */}
          {forms[action]}
        </div>
      </div>
    </div>
  );
};
