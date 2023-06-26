import { TreeMapType } from "@/types/perYear";
import ClientContext from "./ClientContext";
import React, { useState, useEffect } from "react";


export default function ClientProvider({ children }: any) {
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

  const clients22 = data[2];
  const clientFill: TreeMapType[] = [];

  if (clients22) {
    const clients = Object.values(clients22);
    clients.forEach((monthContracts: any) => {
      monthContracts.forEach((contract: any) => {
        const clientIndex = clientFill.findIndex(
          (clientSum) => clientSum.name === contract.Comprador
        );
        if (clientIndex >= 0) {
          clientFill[clientIndex].value += contract.Quantidade;
        } else {
          clientFill.push({
            name: contract.Comprador,
            value: contract.Quantidade,
          });
        }
      });
    });
  }
  clientFill.sort((a, b) => b.value - a.value);

  return (
    <ClientContext.Provider value={clientFill}>
      {children}
    </ClientContext.Provider>
  );
}