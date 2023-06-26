import SupplierContext from "@/context/Suppliers/SupplierContext";
import React, { useContext, useState } from "react";
import { TreeMapType } from "@/types/perYear";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

interface Value {
  x: string,
  y: number
}

export function TreeMapSupplier() {
  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
  const dataArr: any[] = useContext(SupplierContext);

  const top10 = dataArr.slice(0, 10).map((item, index) => {
    let wordsToExtract = 1;
    if (index >= 3 && index < 5 || index === 6) {
      wordsToExtract = 3;
    } else if (index === 5 || index === 7 || index === 10) {
      wordsToExtract = 2;
    }
    const words = item.name.split(' ');
    const extractedWords = words.slice(0, wordsToExtract);

    return {
      x: extractedWords.join(' '),
      y: Number(item.value.toFixed(2)),
    };
  });

  top10.sort((a: any, b: any) => {
    if (a.y > b.y) {
      return -1;
    }
    if (a.y < b.y) {
      return 1
    }
    return 0
  });

  const series = [
    {
      name: "Volume de fornecedores",
      data: top10
    }
  ];
  const options: ApexOptions = {
    legend: {
      show: false
    },
    chart: {
      height: 350,
      type: "treemap"
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "14px",
      },
      offsetY: -10
    },
    colors: ["#187711"]
  };

  return (
    <div className="mt-[-15px] ml-[5px]">
      <Chart
        options={options}
        series={series}
        type="treemap"
        width="870"
        height="410"
      />
    </div>
  );
}