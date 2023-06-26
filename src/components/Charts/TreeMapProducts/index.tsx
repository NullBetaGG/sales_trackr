import ProductContext from '@/context/Product/ProductContext';
import { Data } from '@/types/groupedItens';
import dynamic from 'next/dynamic';
import React, { useContext, useEffect } from 'react';
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface Value {
  x: string,
  y: number
}

export function TreeMapProduct() {
  const dataArr: Data[] = useContext(ProductContext);

  const arrValues: Value[] = [];
  dataArr.forEach((prod) => {
    const nameProd = prod.name;
    const arrContracts = prod.data;
    let sum = 0;
    arrContracts.forEach((cont) => {
      const qtd = +cont.Quantidade;
      if (!isNaN(qtd)) {
        sum += qtd;
      }
    });
    arrValues.push({ x: nameProd, y: sum });
  });

  arrValues.sort((a, b) => {
    if (a.y > b.y) {
      return -1;
    }
    if (a.y < b.y) {
      return 1
    }
    return 0
  });

  const roundedArrValues = arrValues.map((item) => ({
    x: item.x,
    y: parseFloat(item.y.toFixed(2)) // Arredondando para duas casas decimais
  }));

  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
  const series = [
    {
      name: "Volume de produtos",
      data: roundedArrValues
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
    colors: ['#ff6600']
  };

  return (
    <div className="mt-[-15px] ml-[5px]">
      <Chart
        options={options}
        series={series}
        type="treemap"
        width="850"
        height="410"
      />
    </div>
  );
}
