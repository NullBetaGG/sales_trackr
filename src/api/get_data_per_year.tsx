import { DataItem } from "@/types/dataItem";
import moment from 'moment';

export default function GetDataYear() {
  const arrDateFilter: Record<number, Record<number, any[]>> = {};
  const yearC = 2022;
  const sumArray: number[] = [];

  const fetchData = async () => {
    try {
      const response = await fetch('/data/dados_1.json');
      const data = await response.json();
      const arrData: DataItem[] = Object.values(data);

      for (let i = 0; i < arrData.length; i++) {
        const dateString = arrData[i].dt_contrato;
        const dateMoment = moment(dateString, 'YYYY-MM-DD');
        arrData[i].date = dateMoment;
      };

      arrData.forEach((obj: any) => {
        const month = moment(obj.date).month();
        const year = moment(obj.date).year();

        if (!arrDateFilter[year]) {
          arrDateFilter[year] = {};
        }
        if (!arrDateFilter[year][month]) {
          arrDateFilter[year][month] = [];
        }

        arrDateFilter[year][month].push(obj);
      });

      let soma = 0;

      for (let idx = 0; idx < 12; idx++) {
        const element = arrDateFilter[yearC][idx];
        if (element) {
          for (let i = 0; i < element.length; i++) {
            const obj = element[i].Quantidade;
            soma += obj;
          }
        }
        sumArray.push(soma);
        soma = 0;
      };

    } catch (error) {
      console.error('Error fetching data:', error);
    };
  };

  fetchData();

  return sumArray;

}
