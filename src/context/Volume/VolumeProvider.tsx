import { DataItem } from "@/interfaces/dataItem";
import getData from "@/services/get_data";
import VolumeContext from "./VolumeContext";
import React, { useState, useEffect } from "react";
import moment from "moment";

interface VolumeProviderProps {
    children: React.ReactNode;
};

export default function VolumeProvider({ children }: any) {
    const [data, setData] = useState<DataItem[]>([]);

    useEffect(() => {
        getData().then((result) => {
            setData(result as DataItem[]);
        });
    }, []);

    const arrDateFilter: Record<number, Record<number, any[]>> = {};

    console.log(data);

    const fetchData = async () => {
        try {
            const arrData = data;
            console.log(arrData);

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

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();

    return (
        <VolumeContext.Provider value={data}>
            {children}
        </VolumeContext.Provider>
    );
}