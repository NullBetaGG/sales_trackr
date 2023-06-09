/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useContext, useState } from "react";
import Chart from 'chart.js/auto';
import VolumeProductContext from '@/context/VolumeProduct/VolumeProductContext';
import { Contract } from "@/types/groupedItens";

interface Produto {
  name: string;
  data: {
    ano: string;
    meses: Contract[][];
  }[];
}


export function ChartVolumeProduct(props: any) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const dataArr: any[] = useContext(VolumeProductContext);
  const chartInstanceRef = useRef<any>(null);
  const [year, setYear] = useState<string>('2022');
  let nameProduct = props.dataProduct.toLowerCase();

  useEffect(() => {
    let newArray: any[] = [];
    dataArr.forEach((product) => {
      if (product.name === nameProduct) {
        newArray = product.data;
      }
    });

    const ArrFilter: any = [];

    newArray.forEach((yearMonth) => {
      const { ano, meses } = yearMonth;
      const newMonths = [];

      for (let i = 0; i < meses.length; i++) {
        const month = meses[i];

        if (Array.isArray(month)) {
          const sums = month.reduce((total, contrato) => total + contrato.Quantidade, 0);
          newMonths.push(sums);
        } else {
          newMonths.push(0);
        }
      }
      ArrFilter.push({ ano, meses: newMonths });
    });

    if (ArrFilter && chartRef.current) {
      let yearObj = null;
      for (const obj of ArrFilter) {
        if (obj.ano === year) {
          yearObj = obj;
          break;
        }
      }
      let month2022: any = null;
      if (yearObj) {
        month2022 = yearObj.meses;
      }
      console.log(month2022)
      let yearObj2 = null;
      for (const obj of ArrFilter) {
        if (obj.ano === '2023') {
          yearObj2 = obj;
          break;
        }
      }
      let month2023 = null;
      if (yearObj2) {
        month2023 = yearObj2.meses;
      }
      let avrg: any[] = [];
      if (month2022 && month2023) {
        const result = month2023.map((value2023: any, index: any) => {
          const value2022 = month2022![index];
          const sum = value2022 + value2023;
          const average = value2023 === 0 ? 0 : sum / 2;
          return average;
        });
        avrg = result
      }
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        const labels = [
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro',
        ];

        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                label: '2022',
                data: month2022,
                backgroundColor: ['rgba(255, 102, 0, 0.3)'],
                borderColor: ['rgba(255, 102, 0, 1)'],
                borderWidth: 1,
              },
              {
                label: '2023',
                data: month2023,
                backgroundColor: ['#ff66'],
                borderColor: ['#f0cf65'],
                borderWidth: 1,
              },
              {
                label: 'Média',
                data: avrg,
                backgroundColor: ['#2357'],
                borderColor: ['#235789'],
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  callback: function (value, index, values) {
                    return value.toLocaleString('pt-BR') + ' T';
                  },
                },
              },
            },
            plugins: {
              tooltip: {
                callbacks: {
                  label: function (context) {
                    var label = context.dataset.label || '';
                    if (label) {
                      label += ': ';
                    }
                    label += context.parsed.y.toLocaleString('pt-BR') + 'T';
                    return label;
                  },
                },
              },
            },
          },
        });
      } else {
        console.error('Failed to get context of the canvas element.');
      }
    }
  }, [dataArr, chartInstanceRef, year, nameProduct]);

  return (
    <div className="flex justify-between w-[93%] rounded-[0.5rem] ml-[3rem] bg-black h-[28rem]">
      <canvas ref={chartRef} className="" id="myChart"></canvas>
    </div>
  );

}