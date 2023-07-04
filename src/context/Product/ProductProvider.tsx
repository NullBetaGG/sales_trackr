import { DataGrouped } from "@/types/groupedItens";
import ProductContext from "./ProductContext";
import React, { useState, useEffect } from "react";


export default function ProductProvider({ children }: any) {
  const [data, setData] = useState<DataGrouped[]>([]);

  useEffect(() => {
    fetch('/data/newContractCategory_2.json')
      .then(response => response.json())
      .then(data => {
        const arrData = Object.values(data);
        setData(arrData as any)
        console.log(arrData)
        return arrData;
      });
  }, []);

  return (
    <ProductContext.Provider value={data}>
      {children}
    </ProductContext.Provider>
  );
}