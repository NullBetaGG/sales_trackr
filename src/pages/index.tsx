import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ChartVolume } from '@/components/Charts/ChartVolume';
import { TreeMapProduct } from '@/components/Charts/TreeMapProducts';
import { TreeMapClient } from '@/components/Charts/TreeMapClient';
import { TreeMapSupplier } from '@/components/Charts/TreeMapSupplier';
import { Button } from 'antd';


export default function Home() {
  const [dataCount, setDataCount] = useState(10);
  const [clientCount, setClientCount] = useState(10);

  const handleDataCountChange = (count: number) => {
    setDataCount(count);
  };

  const handleClientCountChange = (count: number) => {
    setClientCount(count);
  };

  const router = useRouter()
  const handleClickSales = () => {
    router.push("/sales");
  };
  const handleClickAnalytics = () => {
    router.push("/analytics");
  };
  const handleClickSuppliers = () => {
    router.push("/suppliers");
  };

  return (
    <div className="w-[99vw] pl-[7rem] pr-[3rem] flex justify-between mx-2 h-[90vh] mt-[-6.5rem]">
      <div>
        <div
          className="hover:border-[#888888] justify-center hover:scale-[1.015] transition-all duration-[500ms] bg-[#000000] hover:border-2px w-[53rem] h-[28rem] z-20 rounded-[0.5rem]"
          onDoubleClick={handleClickSales}
        >
          <div className='text-[#ff6600] flex w-[100%] text-[1.2rem] font-extralight font-sans justify-center items-center mb-[0.2rem]'>
            <p className='mt-[0.5rem]'>Volume de Vendas Geral</p>
          </div>
          <ChartVolume />
        </div>
        <div
          className="hover:border-[#888888] mt-6 justify-center hover:scale-[1.015] transition-all duration-[500ms] bg-[#000000] hover:border-2px w-[53rem] h-[28rem] z-20 rounded-[0.5rem]"
          onDoubleClick={handleClickSales}
        >
          <div className='text-[#ff6600] text-[1.2rem] font-extralight font-sans flex w-[100%] justify-between items-center mb-[0.2rem]'>
            <p className='mt-[0.5rem] ml-[21rem]'>Compradores - 2023</p>
            <div className="flex justify-center mt-3">
              <span className="mr-[0.8rem]">Top:</span>
              <Button
                className={`mr-2 px-3 py-1 rounded ${clientCount === 10 ? "bg-gray-300" : "bg-gray-900 text-[#ffffff]"
                  }`}
                onClick={() => handleClientCountChange(10)}
              >
                10
              </Button>
              <Button
                className={`mr-2 px-3 py-1 rounded ${clientCount === 20 ? "bg-gray-300" : "bg-gray-900 text-[#ffffff]"
                  }`}
                onClick={() => handleClientCountChange(20)}
              >
                20
              </Button>
              <Button
                className={`mr-2 px-3 py-1 rounded ${clientCount === 30 ? "bg-gray-300" : "bg-gray-900 text-[#ffffff]"
                  }`}
                onClick={() => handleClientCountChange(30)}
              >
                30
              </Button>
            </div>
          </div>
          <TreeMapClient clientCount={clientCount} />
        </div>
      </div>
      <div>
        <div className="hover:border-[#888888] justify-center hover:scale-[1.015] transition-all duration-[500ms] bg-[#000000] hover:border-2px w-[53rem] h-[28rem] z-20 rounded-[0.5rem]"
          onDoubleClick={handleClickAnalytics}
        >
          <div className='text-[#ff6600] text-[1.2rem] font-extralight font-sans flex w-[100%] justify-center items-center mb-[0.2rem]'>
            <p className='mt-[0.5rem]'>Ranking Geral de Produtos - 2023</p>
          </div>
          <TreeMapProduct />
        </div>
        <div className="hover:border-[#888888] mt-6 justify-center hover:scale-[1.015] transition-all duration-[500ms] bg-[#000000] hover:border-2px w-[53rem] h-[28rem] z-20 rounded-[0.5rem]"
          onDoubleClick={handleClickSuppliers}
        >
          <div className='text-[#ff6600] text-[1.2rem] font-extralight font-sans flex w-[100%] justify-between items-center mb-[0.2rem]'>
            <p className='mt-[0.5rem] ml-[21rem]'>Fornecedores  - 2023</p>
            <div className="flex justify-center mt-3">
              <span className="mr-[0.8rem]">Top:</span>
              <Button
                className={`mr-2 px-3 py-1 rounded ${dataCount === 10 ? "bg-gray-300" : "bg-gray-900 text-[#ffffff]"
                  }`}
                onClick={() => handleDataCountChange(10)}
              >
                10
              </Button>
              <Button
                className={`mr-2 px-3 py-1 rounded ${dataCount === 20 ? "bg-gray-300" : "bg-gray-900 text-[#ffffff]"
                  }`}
                onClick={() => handleDataCountChange(20)}
              >
                20
              </Button>
              <Button
                className={`mr-2 px-3 py-1 rounded ${dataCount === 30 ? "bg-gray-300" : "bg-gray-900 text-[#ffffff]"
                  }`}
                onClick={() => handleDataCountChange(30)}
              >
                30
              </Button>
            </div>
          </div>
          <TreeMapSupplier dataCount={dataCount} />
        </div>
      </div>
    </div>
  )
}
