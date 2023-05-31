import React, { useEffect, useState } from "react";
import getData from "@/services/get_data";
import { DataItem } from "@/interfaces/dataItem";

export function ChartVolume() {
    const [data, setData] = useState<DataItem[]>([]);

    useEffect(() => {
        getData().then(data => {
            setData(data as any);
        })
    }, [])

    console.log(data);

    return (
        <div>
            {data.length > 0 && (
                <div>
                    <p>{data[0].Cidade_Fornecedor}</p>
                    <p>{data[0].Comprador}</p>
                    <p>{data[0].Produto}</p>
                    <p>{data[0].Quantidade}</p>
                    <p>{data[0].vl_reais}</p>
                </div>
            )}
        </div>
    )
}