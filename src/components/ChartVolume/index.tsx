import React, { useEffect, useRef, useState, useContext } from "react";
import GetDataYear from "@/services/get_data_per_year";
import Chart from 'chart.js/auto';
import DataProvider from '@/context/Data/DataContext'

export function ChartVolume() {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const data = useContext(DataProvider);

    console.log(data);

    return (
        <ul>
            {data!.map((item) => (
                <li key={item.Cidade_Comprador}>
                    <span>{item.Cidade_Comprador}</span>
                </li>
            ))}
            {data!.map((item) => (
                <li key={item.Cidade_Comprador}>
                    <span>{item.Cidade_Comprador}</span>
                </li>
            ))}
        </ul>
    );

    // useEffect(() => {    
    //     if (data && chartRef.current) {
    //         const ctx = chartRef.current.getContext('2d');
    //         if (ctx) {
    //             const labels = [
    //                 'Janeiro',
    //                 'Fevereiro',
    //                 'Março',
    //                 'Abril',
    //                 'Maio',
    //                 'Junho',
    //                 'Julho',
    //                 'Agosto',
    //                 'Setembro',
    //                 'Outubro',
    //                 'Novembro',
    //                 'Dezembro',
    //             ];
    //             new Chart(ctx, {
    //                 type: 'bar',
    //                 data: {
    //                     labels: labels,
    //                     datasets: [
    //                         {
    //                             label: 'Volume Mensal de Vendas - 2022',
    //                             data: data,
    //                             backgroundColor: ['rgba(255, 102, 0, 0.3)'],
    //                             borderColor: ['rgba(255, 102, 0, 1)'],
    //                             borderWidth: 1,
    //                         },
    //                     ],
    //                 },
    //                 options: {
    //                     scales: {
    //                         y: {
    //                             beginAtZero: true,
    //                             ticks: {
    //                                 callback: function (value, index, values) {
    //                                     return value.toLocaleString('pt-BR') + ' T';
    //                                 },
    //                             },
    //                         },
    //                     },
    //                     plugins: {
    //                         tooltip: {
    //                             callbacks: {
    //                                 label: function (context) {
    //                                     var label = context.dataset.label || '';
    //                                     if (label) {
    //                                         label += ': ';
    //                                     }
    //                                     label += context.parsed.y.toLocaleString('pt-BR') + 'T';
    //                                     return label;
    //                                 },
    //                             },
    //                         },
    //                     },
    //                 },
    //             });
    //         } else {
    //             console.error('Failed to get context of the canvas element.');
    //         }
    //     }
    // }, [data]);

    return (
        <div><p>Vamo ver o que da</p></div>
        // <div className="flex justify-between w-[100%] rounded-[1.5rem] bg-black h-[25rem]">
        //     <canvas ref={chartRef} className="" id="myChart"></canvas>
        // </div>
    );
}