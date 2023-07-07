/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useContext } from "react";
import Chart from 'chart.js/auto';
import VolumeContext from '@/context/Volume/VolumeContext';
import { YearObj } from "@/types/volume";

export function ChartVolumeYear() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const dataArr: YearObj[] = useContext(VolumeContext);
  const chartInstanceRef = useRef<any>(null);
  const yearsSum: number[] = [];

  dataArr.forEach((sum) => {
    let soma = 0;
    sum.meses.forEach((value: any) => {
      soma += value;
    });
    if (soma > 20000) {
      yearsSum.push(soma);
    }
  });

  console.log(yearsSum);

  useEffect(() => {
    if (dataArr && chartRef.current && yearsSum) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        const labels = [
          '2021',
          '2022',
          '2023'
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
                label: 'Volume anual',
                data: yearsSum,
                backgroundColor: ['rgba(255, 102, 0, 0.3)'],
                borderColor: ['rgba(255, 102, 0, 1)'],
                borderWidth: 1,
              },
            ],
          },
          options: {
            indexAxis: 'y',
            plugins: {
              tooltip: {
                callbacks: {
                  label: function (context) {
                    var label = context.dataset.label || '';
                    if (label) {
                      label += ': ';
                    }
                    label += context.parsed.x.toLocaleString('pt-BR') + 'T';
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
  }, [dataArr, chartInstanceRef, yearsSum]);

  return (
    <div className="flex justify-between w-[95%] rounded-[0.5rem] ml-[0.5rem] bg-black">
      <canvas ref={chartRef} className="" id="myChartVol"></canvas>
    </div>
  );
}