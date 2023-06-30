/* eslint-disable react-hooks/exhaustive-deps */
import VolumeProductContext from "@/context/VolumeProduct/VolumeProductContext";
import { Chart } from "chart.js";
import { useContext, useEffect, useRef, useState } from "react";


export default function ChartClient(props: any) {
  const dataArr: any[] = useContext(VolumeProductContext);
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<any>(null);
  let productSelct = props.dataProduct;
  const compradoresPorMes: any[] = [];

  dataArr.forEach((product) => {
    if (product.name === productSelct) {
      const data = product.data;
      data.forEach((item: { ano: any; meses: any; }) => {
        const { ano, meses } = item;
        meses.forEach((mes: any, indice: any) => {
          const compradores = mes.compradores || [];
          mes.forEach((objeto: any) => {
            const comprador = objeto.Comprador;
            if (!compradores.includes(comprador)) {
              compradores.push(comprador);
            }
          });
          const novoObjeto = {
            ano,
            mes: indice + 1,
            compradores
          };
          compradoresPorMes.push(novoObjeto);
        });
      });
    }
  });

  const novoArray: any = [];

  compradoresPorMes.forEach((item) => {
    const { ano, mes, compradores } = item;
    const comprimento = compradores.length;
    const objetoAno = novoArray.find((obj: any) => obj.ano === ano);
    if (objetoAno) {
      objetoAno.mes[mes - 1] = comprimento;
    } else {
      const novoObjetoAno = {
        ano,
        mes: Array(12).fill(0)
      };
      novoObjetoAno.mes[mes - 1] = comprimento;
      novoArray.push(novoObjetoAno);
    }
  });

  let month2022: number[] = [];
  let month2023: number[] = [];

  novoArray.forEach((arr: any) => {
    if (arr.ano === '2022') {
      month2022 = arr.mes;
    };
    if (arr.ano === '2023') {
      month2023 = arr.mes;
    };
  });

  console.log(novoArray);
  console.log(compradoresPorMes)

  useEffect(() => {
    if (dataArr && chartRef.current) {
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
          type: 'line',
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
              // {
              //   label: 'Média',
              //   data: avrg,
              //   backgroundColor: ['#2357'],
              //   borderColor: ['#235789'],
              //   borderWidth: 1,
              // },
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
  }, [dataArr, chartInstanceRef, productSelct]);

  return (
    <div className="flex justify-between w-[93%] rounded-[0.5rem] ml-[2rem] bg-black h-[28rem]">
      <canvas ref={chartRef} className="" id="myChart"></canvas>
    </div>
  );
}