import React, { useEffect, useState, useContext, useRef } from "react";
import { CrosshairMode, createChart } from "lightweight-charts";
import PriceContext from "@/context/Price/PriceContext";
import { PricesProduct } from "@/types/pricesProduct";

export default function ChartComponent() {
  const dataFil: PricesProduct[] = useContext(PriceContext);
  const [chartCreated, setChartCreated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && dataFil.length > 0 && !chartCreated) {
      const data = dataFil[32].datas;
      const chartElement = window.document.getElementById('chart');
      console.log(chartElement);
      console.log(dataFil[32].datas);
      if (chartElement) {
        const chart = createChart(chartElement, {
          width: 650,
          height: 400,
          layout: {
            background: {
              color: '#000000',
            },
            textColor: '#333',
          },
          grid: {
            vertLines: {
              color: '#000000',
            },
            horzLines: {
              color: '#000000',
            },
          },
          crosshair: {
            mode: CrosshairMode.Normal,
          },
          timeScale: {
            borderColor: '#ff6600',
          },
        });
        const maxLine = chart.addLineSeries({
          color: '#6a0000',
        });
        const minLine = chart.addLineSeries({
          color: '#005607',
        });
        const avgLine = chart.addLineSeries({
          color: '#000b56',
        });

        const chartData = data
          ? data
            .sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
            .map((item) => ({
              time: item.date,
              value: item.avrg,
              max: item.max,
              min: item.min,
            }))
          : [];
        maxLine.setData(
          chartData.map((item) => ({ time: item.time, value: item.max }))
        );
        minLine.setData(
          chartData.map((item) => ({ time: item.time, value: item.min }))
        );
        avgLine.setData(
          chartData.map((item) => ({ time: item.time, value: item.value }))
        );

        setChartCreated(true);
      }
    }
  }, [dataFil, chartCreated]);

  return (
    <div
      className="w-[100%] bg-black"
      id="chart"
    />
  );
}
