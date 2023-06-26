export interface Contract {
  nr_contrato: number;
  cd_contrato: number;
  cd_pessoa_comprador: number;
  dt_contrato: string;
  cd_pessoa_vendedor: number;
  Produto: string;
  Unidade: string;
  Quantidade: number;
  vl_preco: number;
  vl_reais: number;
  Comprador: string;
  Fornecedor: string;
  Cidade_Comprador: string;
  Estado_Comprador: string;
  Cidade_Fornecedor: string;
  Estado_Fornecedor: string;
  cd_pessoa_fornecedor: number;
}

export interface Data {
  name: string;
  data: Contract[];
}

export interface DataGrouped {
  product: string;
  data: Contract[];
}
