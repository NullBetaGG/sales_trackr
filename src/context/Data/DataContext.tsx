import { DataItem } from "@/interfaces/dataItem";
import { createContext } from "react";

export const DataContext = createContext<DataItem[] | undefined>(undefined);

export default DataContext;
