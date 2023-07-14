import VolumeProductContext from "./VolumeProductContext";
import React, { useState, useEffect } from "react";


export default function VolumeProductProvider({ children }: any) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch('/data/contractsPerYear_3.json')
      .then(response => response.json())
      .then(data => {
        const arrData = Object.values(data);
        setData(arrData as any)
        console.log(arrData)
        return arrData;
      });
  }, []);

  return (
    <VolumeProductContext.Provider value={data}>
      {children}
    </VolumeProductContext.Provider>
  );
}