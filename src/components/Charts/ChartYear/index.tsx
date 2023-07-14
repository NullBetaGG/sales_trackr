/* eslint-disable react-hooks/exhaustive-deps */
import { VolumeContext } from "@/context/Volume/VolumeContext";
import { Chart } from "chart.js";
import { ArrowDown, ArrowUp } from "iconsax-react";
import { useContext, useEffect, useRef } from "react";


export default function ChartYear() {
  const dataArr: any[] = useContext(VolumeContext);
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<any>(null);
  const yearsSum: number[] = [];

  dataArr.forEach((sum) => {
    let soma = 0;
    sum.meses.forEach((value: any) => {
      soma += value;
    });
    if (soma > 2000) {
      yearsSum.push(soma);
    }
  });

  console.log(yearsSum);

  const percentChanges = [77.8, 24.1, -38.9, -13.35];

  useEffect(() => {
    if (dataArr && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        const labels = [
          '2019',
          '2020',
          '2021',
          '2022',
          '2023',
        ];

        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Analise de Volume',
                data: yearsSum,
                backgroundColor: ['rgba(255, 102, 0, 0.3)'],
                borderColor: ['rgba(255, 102, 0, 1)'],
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
                    return value.toLocaleString('pt-BR') + '   ';
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
                    label += context.parsed.y.toLocaleString('pt-BR') + ' Clientes';
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
  }, [dataArr, chartInstanceRef]);

  return (
    <>
      <div className="flex justify-between w-[93%] rounded-[0.5rem] mt-[5rem] ml-[0.5rem] bg-black h-[15rem]">
        <canvas ref={chartRef} className="" id="myChart"></canvas>
      </div>
      <div className="text-[#ff6600] ml-[3rem] w-[100%] text-[1.4rem] mt-[1.5rem] font-extralight font-sans">
        <h1>Variação Percentual</h1>
        <h2 className="mt-5 text-[#ffffff] flex font-extralight text-[1.2rem]">2019 - 2020: <span className="text-[#00000000]">__</span><span className="text-[#17cb17]">{percentChanges[0]}%</span><ArrowUp className="mt-[0.3rem] ml-[1rem]" size="20" color="#37d67a" /></h2>
        <h2 className="mt-3 text-[#ffffff] flex font-extralight text-[1.2rem]">2020 - 2021: <span className="text-[#00000000]">__</span><span className="text-[#17cb17]">{percentChanges[1]}%</span><ArrowUp className="mt-[0.3rem] ml-[1rem]" size="20" color="#37d67a" /></h2>
        <h2 className="mt-3 text-[#ffffff] flex font-extralight text-[1.2rem]">2021 - 2022: <span className="text-[#00000000]">__</span><span className="text-[#f32222]">{percentChanges[2]}%</span><ArrowDown className="mt-[0.3rem] ml-[1rem]" size="20" color="#f47373" /></h2>
        <h2 className="mt-3 text-[#ffffff] flex font-extralight text-[1.2rem]">2022 - 2023: <span className="text-[#00000000]">__</span><span className="text-[#f32222]">{percentChanges[3]}%</span><ArrowDown className="mt-[0.3rem] ml-[1rem]" size="20" color="#f47373" /></h2>
      </div>
    </>
  );
}