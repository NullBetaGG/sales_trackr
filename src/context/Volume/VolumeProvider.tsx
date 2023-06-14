import { DataItem } from "@/interfaces/dataItem";
import getData from "@/services/get_data";
import VolumeContext from "./VolumeContext";
import React, { useState, useEffect, useCallback } from "react";
import moment from "moment"

interface VolumeProviderProps {
    children: React.ReactNode;
};

export default function VolumeProvider({ children }: any) {
    const [data, setData] = useState<DataItem[]>([]);
    const arraySums: any = [];
    const arrDateFilter: Record<number, Record<number, any[]>> = {};

    useEffect(() => {
        getData().then((result) => {
            setData(result as DataItem[]);
        });
    }, []);

    const fetchData = useCallback(async () => {
        try {
            const arrData = data;

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

            const yearCurrent = 2022;
            let sums = 0;

            for (let idx = 0; idx < 12; idx++) {
                const element = arrDateFilter[yearCurrent][idx];
                if (element) {
                    for (let i = 0; i < element.length; i++) {
                        const obj = element[i].Quantidade;
                        sums += obj;
                    }
                }
                arraySums.push(sums);
                sums = 0;
            }

        } catch (error) {
            console.error('Error fetching data ta dando erro aqui no volume provider porra:', error);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    useEffect(() => {
        if (data.length > 0) {
            fetchData();
        }
    }, [data, fetchData]);


    return (
        <VolumeContext.Provider value={arraySums}>
            {children}
        </VolumeContext.Provider>
    );
}