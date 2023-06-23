/* eslint-disable react-hooks/exhaustive-deps */
import { DataItem } from "@/types/dataItem";
import PriceContext from "./PriceContext";
import React, { useState, useEffect } from "react";
import { Data } from "@/types/groupedItens";


export default function PriceProvider({ children }: any) {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    fetch('/data/products.json')
      .then(response => response.json())
      .then(data => {
        const arrData = Object.values(data);
        setData(arrData as any)
        console.log(arrData)
        return arrData;
      });
  }, []);

  return (
    <PriceContext.Provider value={data}>
      {children}
    </PriceContext.Provider>
  );
}