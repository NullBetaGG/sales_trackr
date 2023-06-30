import ProductContext from '@/context/Product/ProductContext';
import { Data } from '@/types/groupedItens';
import dynamic from 'next/dynamic';
import React, { useContext } from 'react';
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
      const contractDate = new Date(cont.dt_contrato);
      const year2023 = new Date('2023-01-01');

      if (contractDate >= year2023) {
        sum += qtd;
      }
    });
    if (sum != 0) {
      arrValues.push({ x: nameProd, y: sum });
    }
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
    x: item.x.toUpperCase(),
    y: parseFloat(item.y.toFixed(2))
  }));

  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
  const series = [
    {
      name: "Volume de produtos",
      data: roundedArrValues
    }
  ];

  const options: ApexOptions = {
    tooltip: {
      enabled: true,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const number = w.globals.series[seriesIndex][dataPointIndex];
        const name = roundedArrValues[dataPointIndex].x;
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
            <span style="font-weight: bold;">${name.toUpperCase()}</span><br/>
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
        width="840"
        height="415"
      />
    </div>
  );
}
