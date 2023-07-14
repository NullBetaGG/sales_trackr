import { api } from "@/lib/axios";

export default async function getAllData(year: number, query?: string) {
  try {
    const response = await api.get(`soma_contratos_mes/${year}`, {
      params: {
        q: query,
      },
    });

    const data = response.data;
    const meses = Array(12).fill(0);

    data.forEach((item: { mes: number; valor: number }) => {
      meses[item.mes - 1] = item.valor;
    });

    const transformedData = {
      ano: year.toString(),
      meses: meses,
    };

    return transformedData.meses;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getDataContract(query?: string) {
  try {
    const response = await api.get("contratos", {
      params: {
        q: query,
      },
    });
    const data = response.data;

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
