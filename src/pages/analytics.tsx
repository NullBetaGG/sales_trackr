import ChartPrice from '@/components/Charts/ChartPrice';
import { ChartVolumeProduct } from '@/components/Charts/ChartVolumeProduct';
import { Chart, Diagram } from 'iconsax-react';


export default function Maps() {
  return (
    <div className="flex mt-[-3rem] ml-[3rem] text-[#ffffff] justify-center">
      <div className="bg-black w-[52rem] ml-[3rem] rounded-lg">
        <div className="flex justify-center mb-[0.5rem] mt-[0.5rem] text-[1.5rem] font-extralight font-sans text-[#ff6600]">
          <span className="mr-[2rem]">Histórico de Preços - Farelo de Soja</span>
          <Diagram
            className="mt-[0.1rem]"
            size="32"
            color="#ff6600"
            variant="TwoTone" />
        </div>
        <div>
          <ChartPrice />
        </div>
      </div>
      <div className="bg-black w-[52rem] ml-[3rem] rounded-lg">
        <div className="flex justify-center mb-[2rem] mt-[0.5rem] text-[1.5rem] font-extralight font-sans text-[#ff6600]">
          <span className="mr-[2rem]">Volume de Vendas - Farelo de Soja </span>
          <Chart
            className="mt-[0.1rem]"
            size="32"
            color="#ff6600"
            variant="TwoTone"
          />
        </div>
        <div>
          <ChartVolumeProduct />
        </div>
      </div>
    </div>
  )
}