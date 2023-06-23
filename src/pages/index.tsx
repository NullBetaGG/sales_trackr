import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ChartVolume } from '@/components/Charts/ChartVolume';
import { TreeMapProduct } from '@/components/Charts/TreeMapProducts';
import { TreeMapClient } from '@/components/Charts/TreeMapClient';
import { TreeMapSupplier } from '@/components/Charts/TreeMapSupplier';


export default function Home() {
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
    <div className="w-[99vw] pl-[7rem] pr-[3rem] flex justify-between mx-2 h-[90vh] mt-[-6rem]">
      <div>
        <div
          className="hover:border-[#888888] justify-center hover:scale-[1.015] transition-all duration-[500ms] bg-[#000000] hover:border-2px w-[53rem] h-[27rem] z-20 rounded-[0.5rem]"
          onDoubleClick={handleClickSales}
        >
          <div className='text-[#ff6600] flex w-[100%] uppercase font-semibold font-sans justify-center items-center mb-[0.2rem]'>
            <p className='mt-[0.5rem]'>Volume de Vendas Geral</p>
          </div>
          <ChartVolume />
        </div>
        <div
          className="hover:border-[#888888] mt-6 justify-center hover:scale-[1.015] transition-all duration-[500ms] bg-[#000000] hover:border-2px w-[53rem] h-[27rem] z-20 rounded-[0.5rem]"
          onDoubleClick={handleClickSales}
        >
          <div className='text-[#ff6600] uppercase font-semibold font-sans flex w-[100%] justify-center items-center mb-[0.2rem]'>
            <p className='mt-[0.5rem]'>Top 10 Compradores</p>
          </div>
          <TreeMapClient />
        </div>
      </div>
      <div>
        <div className="hover:border-[#888888] justify-center hover:scale-[1.015] transition-all duration-[500ms] bg-[#000000] hover:border-2px w-[53rem] h-[27rem] z-20 rounded-[0.5rem]"
          onDoubleClick={handleClickAnalytics}
        >
          <div className='text-[#ff6600] uppercase font-semibold font-sans flex w-[100%] justify-center items-center mb-[0.2rem]'>
            <p className='mt-[0.5rem]'>Ranking Geral de Produtos</p>
          </div>
          <TreeMapProduct />
        </div>
        <div className="hover:border-[#888888] mt-6 justify-center hover:scale-[1.015] transition-all duration-[500ms] bg-[#000000] hover:border-2px w-[53rem] h-[27rem] z-20 rounded-[0.5rem]"
          onDoubleClick={handleClickSuppliers}
        >
          <div className='text-[#ff6600] uppercase font-semibold font-sans flex w-[100%] justify-center items-center mb-[0.2rem]'>
            <p className='mt-[0.5rem]'>Top 10 Fornecedores</p>
          </div>
          <TreeMapSupplier />
        </div>
      </div>
    </div>
  )
}
