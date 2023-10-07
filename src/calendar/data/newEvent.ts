import { addHours } from "date-fns";
import { EventStruc } from "../../types";

export const newDefaultEvent:EventStruc = {
    id:"123",
    title:"",
    notes:"",
    end:addHours(new Date(),2).toJSON(),
    start:(new Date()).toJSON(),
}