import { TreeMapType } from "@/types/perYear";
import SupplierContext from "./SupplierContext";
import React, { useState, useEffect } from "react";


export default function SupplierProvider({ children }: any) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch('/data/perYear.json')
      .then(response => response.json())
      .then(data => {
        const arrData = Object.values(data);
        setData(arrData as any)
        console.log(arrData)
        return arrData;
      });
  }, []);

  const supplier23 = data[3];
  const supplierFill: TreeMapType[] = [];

  if (supplier23) {
    const suppliers = Object.values(supplier23);
    suppliers.forEach((monthContracts: any) => {
      monthContracts.forEach((contract: any) => {
        const supplierIndex = supplierFill.findIndex(
          (supplierSum) => supplierSum.name === contract.Fornecedor
        );
        if (supplierIndex >= 0) {
          supplierFill[supplierIndex].value += contract.Quantidade;
        } else {
          supplierFill.push({
            name: contract.Fornecedor,
            value: contract.Quantidade,
          });
        }
      });
    });
  }
  supplierFill.sort((a, b) => b.value - a.value);

  return (
    <SupplierContext.Provider value={supplierFill}>
      {children}
    </SupplierContext.Provider>
  );
};