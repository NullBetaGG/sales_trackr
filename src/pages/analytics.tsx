import { ChartVolumeProduct } from '@/components/Charts/ChartVolumeProduct';
import { Button } from 'antd';
import { Chart, ChartSquare, Diagram } from 'iconsax-react';
import { useState } from 'react';


export default function Maps() {
  const [dataProduct, setDataProduct] = useState('ddgs');

  const handleChangeProduct = (product: string) => {
    setDataProduct(product);
  };

  return (
    <div className="mt-[-3rem] ml-[3rem] text-[#ffffff] justify-center">
      <div className="ml-[8rem]">
        <Button
          className={`mr-2 px-3 py-1 rounded ${dataProduct === 'ddgs' ? "bg-[#ff6600]" : "bg-gray-900 text-[#ffffff]"
            }`}
          onClick={() => handleChangeProduct('ddgs')}
        >
          DDGS
        </Button>
        <Button
          className={`mr-2 px-3 py-1 rounded ${dataProduct === 'farelo de soja' ? "bg-[#ff6600] text-[#ffffff]" : "bg-gray-900 text-[#ffffff]"
            }`}
          onClick={() => handleChangeProduct('farelo de soja')}
        >
          Farelo de Soja
        </Button>
        <Button
          className={`mr-2 px-3 py-1 rounded ${dataProduct === 'soja desativada' ? "bg-[#ff6600]" : "bg-gray-900 text-[#ffffff]"
            }`}
          onClick={() => handleChangeProduct('soja desativada')}
        >
          Soja Desativada
        </Button>
        <Button
          className={`mr-2 px-3 py-1 rounded ${dataProduct === 'casca' ? "bg-[#ff6600]" : "bg-gray-900 text-[#ffffff]"
            }`}
          onClick={() => handleChangeProduct('casca')}
        >
          Casca
        </Button>
        <Button
          className={`mr-2 px-3 py-1 rounded ${dataProduct === 'soja' ? "bg-[#ff6600]" : "bg-gray-900 text-[#ffffff]"
            }`}
          onClick={() => handleChangeProduct('soja')}
        >
          Soja
        </Button>
      </div>
      <div className="flex ml-[3rem] mt-[3rem] justify-center">
        <div className="relative bg-black w-[52rem] ml-[3rem] rounded-lg">
          <div className="flex justify-center mb-[2rem] mt-[0.5rem] text-[1.5rem] font-extralight font-sans text-[#ff6600]">
            <span className="mr-[2rem]">Volume de Vendas - {dataProduct.toUpperCase()} </span>
            <Chart
              className="mt-[0.1rem]"
              size="32"
              color="#ff6600"
              variant="TwoTone"
            />
          </div>
          <div>
            <ChartVolumeProduct dataProduct={dataProduct} />
          </div>
        </div>
        <div className="relative bg-black w-[52rem] ml-[3rem] rounded-lg">
          <div className="flex justify-center mb-[2rem] mt-[0.5rem] text-[1.5rem] font-extralight font-sans text-[#ff6600]">
            <span className="mr-[2rem]">Clientes por produto</span>
            <ChartSquare
              className="mt-[0.1rem]"
              size="32"
              color="#ff6600"
              variant="TwoTone"
            />
          </div>
          <div className="flex justify-center">
            <span>Another chart</span>
          </div>
        </div>
      </div>
    </div>
  )
}