import { addHours } from "date-fns";
import { EventStruc } from "../../types";

export const newDefaultEvent:EventStruc = {
    title:"",
    notes:"",
    end:addHours(new Date(),2),
    start:new Date(),
}