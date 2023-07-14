export interface MonthObj {
  mes: number;
  valorTotal: number;
}

export interface YearObj {
  ano: string;
  meses: MonthObj[];
}
