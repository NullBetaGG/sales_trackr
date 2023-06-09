import { DataItem } from "@/types/dataItem";
import getData from "@/api/get_data";
import DataContext from "./DataContext";
import React, { useState, useEffect } from "react";

interface DataProviderProps {
  children: React.ReactNode;
};

export default function DataProvider({ children }: DataProviderProps) {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    getData().then((result) => {
      setData(result as DataItem[]);
    });
  }, []);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}