
export const CalendarEvent =  ({ title }: any) => {

  return <strong
    className="block h-[110%]" 
    onContextMenu={(e)=>{
      e.preventDefault()
  }}>{title}</strong>;
};
