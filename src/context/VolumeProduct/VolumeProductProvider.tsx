import VolumeProductContext from "./VolumeProductContext";
import React, { useState, useEffect } from "react";
import { Contract } from "@/types/groupedItens";


export default function VolumeProductProvider({ children }: any) {
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

  const newArray = [];
  for (let i = 0; i < data.length; i++) {
    const arrayYear = data[i];
    const newArrayYear = [];
    for (let j = 0; j < 12; j++) {
      const arrayMonth = arrayYear[j];
      if (arrayMonth === undefined) {
        newArrayYear.push([]);
      } else {
        const filteredArray = arrayMonth.filter((obj: Contract) => obj.Produto === "FARELO DE SOJA");
        newArrayYear.push(filteredArray);
      };
    };
    newArray.push(newArrayYear);
  };

  const ArrFilter = [];
  const anos = [2020, 2021, 2022, 2023];
  for (let i = 0; i < newArray.length; i++) {
    const arrayAno = newArray[i];
    const somaMeses = arrayAno.map((arrayMes) => {
      const somaQuantidades = arrayMes.reduce((total: number, obj: Contract) => total + obj.Quantidade, 0);
      return somaQuantidades;
    });
    const objetoAno = {
      ano: anos[i],
      meses: somaMeses,
    };

    ArrFilter.push(objetoAno);
  };

  return (
    <VolumeProductContext.Provider value={ArrFilter}>
      {children}
    </VolumeProductContext.Provider>
  );
}