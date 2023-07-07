import SupplierContext from "@/context/Suppliers/SupplierContext";
import React, { useContext, useState } from "react";
import { TreeMapType } from "@/types/perYear";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

interface Value {
  x: string,
  y: number
}

export function TreeMapSupplier(props: any) {
  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
  const dataArr: any[] = useContext(SupplierContext);
  const count = props.dataCount;

  const top10 = dataArr.slice(0, count).map((item, index) => {
    const word = item.name.split(' ');
    let firstWord = word[0];
    let lastWord = word[word.length - 1];
    let result = firstWord + ' ' + lastWord;

    if (index >= 0 || index <= 3) {
      result = word[0];
    }
    if (index === 5 || index === 6 || index === 8) {
      result = word[0] + ' ' + word[1];
    }

    return {
      x: result,
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
  console.log(dataArr);
  const options: ApexOptions = {
    tooltip: {
      enabled: true,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const number = w.globals.series[seriesIndex][dataPointIndex];
        const name = top10[dataPointIndex].x;
        const numberValue = Math.floor(number);
        const stringN = numberValue.toString();
        let value = '';

        if (stringN.length === 5) {
          value = stringN.slice(0, 2) + '.' + stringN.slice(2, 3) + ' K' + ' - Ton';
        } else if (stringN.length === 6) {
          value = stringN.slice(0, 3) + '.' + stringN.slice(3, 4) + ' K' + ' - Ton';
        } else if (stringN.length === 4) {
          value = stringN.slice(0, 1) + '.' + stringN.slice(1, 2) + ' K' + ' - Ton';
        } else {
          value = stringN;
        }

        const tooltipContent = `
          <div style="text-align: center;">
            <span style="font-weight: bold;">${name}</span><br/>
            Qtd: <strong>${value}</strong>
          </div>
        `;

        return tooltipContent;
      }
    },
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
        width="672"
        height="395"
      />
    </div>
  );
}