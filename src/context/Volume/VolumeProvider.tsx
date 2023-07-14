import { YearObj } from "@/types/volume";
import VolumeContext from "./VolumeContext";
import React, { useState, useEffect } from "react";


export default function VolumeProvider({ children }: any) {
  const [data, setData] = useState<YearObj[]>([]);

  useEffect(() => {
    fetch('/data/sumVol_3.json')
      .then(response => response.json())
      .then(data => {
        const arrData = Object.values(data);
        setData(arrData as any)
        console.log(arrData)
        return arrData;
      });
  }, []);

  return (
    <VolumeContext.Provider value={data}>
      {children}
    </VolumeContext.Provider>
  );
}