import ChartPrice from '@/components/Charts/ChartPrice';
import { ChartVolumeProduct } from '@/components/Charts/ChartVolumeProduct';


export default function Maps() {
  let component = 'Analytics';
  return (
    <div className="flex mt-[-3rem] text-[#ffffff] justify-center">
      <div className="">
        <ChartPrice />
      </div>
      <div>
        <ChartVolumeProduct />
      </div>
    </div>
  )
}