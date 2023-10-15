import { MouseEventHandler } from "react";

export const CalendarEvent = (onContextMenu:MouseEventHandler<HTMLElement>)=> ({ title }: any) => {

  return <strong
    className="block h-[110%]" 
    onContextMenu={(e)=>{
      e.preventDefault()
      onContextMenu(e)
  }}>{title}</strong>;
};
