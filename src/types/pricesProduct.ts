export interface PriceData {
  avrg: number;
  date: string;
  max: number;
  min: number;
  qtd: number;
  somaVrPreco: number;
  unidade: string;
}

export interface PricesProduct {
  date: any;
  datas: PriceData[];
  product: string;
}
