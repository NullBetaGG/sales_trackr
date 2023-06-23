import ClientContext from "@/context/Buyers/ClientContext";
import React, { useContext, useState } from "react";
import { TreeMapType } from "@/types/perYear";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

interface Value {
  x: string,
  y: number
}

export function TreeMapClient() {
  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
  const dataArr: any[] = useContext(ClientContext);
  console.log(dataArr);

  const top10 = dataArr.slice(0, 10).map((item, index) => {
    let wordsToExtract = 1;
    if (index === 6 || index === 9) {
      wordsToExtract = 1;
    } else if (index === 2 || index === 4) {
      wordsToExtract = 2;
    } else if (index === 5) {
      wordsToExtract = 3;
    }

    if (index === 7 || index === 8) {
      const words = item.name.split(' ');
      const firstWord = words[0];
      const lastWord = words[words.length - 1];
      return {
        x: `${firstWord} ${lastWord}`,
        y: Number(item.value.toFixed(2)),
      };
    }
    if (index === 0 || index === 3) {
      const words = item.name.split(' ');
      const firstWord = words[0];
      const lastWord = words[words.length - 2];
      return {
        x: `${firstWord} ${lastWord}`,
        y: Number(item.value.toFixed(2)),
      };
    }
    if (index === 1) {
      const words = item.name.split(' ');
      const lastWord = words[words.length - 1];
      return {
        x: lastWord,
        y: Number(item.value.toFixed(2)),
      };
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
      name: "Volume de Compras",
      data: top10
    }
  ];
  const options: ApexOptions = {
    legend: {
      show: false
    },
    chart: {
      height: 350,
      type: 'treemap'
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '14px',
      },
      offsetY: -10
    },
    colors: ['#187795']
  };

  console.log("Top 10 compradores", top10);
  console.log("Esse é o array completinho pra tu ver", dataArr);

  return (
    <div className="mt-[-15px] ml-[5px]">
      <Chart
        options={options}
        series={series}
        type="treemap"
        width="858"
        height="410"
      />
    </div>
  );
}