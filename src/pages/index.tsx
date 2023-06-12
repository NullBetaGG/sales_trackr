import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import getData from "@/services/get_data"; 7
import { ChartVolume } from '@/components/ChartVolume';
import { ChartPrice } from '@/components/ChartPrice';

export default function Home() {


  const router = useRouter()
  const handleDoubleClick = () => {
    router.push("/sales");
  };

  return (
    <div className="w-[99vw] pl-[7rem] pr-[3rem] flex justify-between mx-2 h-[90vh] mt-[-6rem]">
      <div>
        <div
          className="hover:border-[#888888] flex justify-center hover:scale-[1.03] transition-all duration-[500ms] bg-[#2d2d2d] hover:border-2px w-[40rem] h-[25rem] z-20 rounded-[1.5rem]"
          onDoubleClick={handleDoubleClick}
        >
          <ChartVolume />

        </div>
        <div
          className="hover:border-[#888888] mt-6 flex justify-center hover:scale-[1.03] transition-all duration-[500ms] bg-[#2d2d2d] hover:border-2px w-[40rem] h-[25rem] z-20 rounded-[1.5rem]"
        >
          <span className="text-[#ff6600] uppercase flex items-center font-light">And here will be some another graph probably</span>

        </div>
      </div>
      <div>
        <div className="hover:border-[#888888] flex justify-center hover:scale-[1.03] transition-all duration-[500ms] bg-[#2d2d2d] hover:border-2px w-[40rem] h-[25rem] z-20 rounded-[1.5rem]"
        >
          <span className="text-[#ff6600] uppercase flex items-center font-light">And here will be some graph probably</span>

        </div>
        <div className="hover:border-[#888888] mt-6 flex justify-center hover:scale-[1.03] transition-all duration-[500ms] bg-[#2d2d2d] hover:border-2px w-[40rem] h-[25rem] z-20 rounded-[1.5rem]"
        >
          <span className="text-[#ff6600] uppercase flex items-center font-light">And here will be some another graph probably</span>

        </div>
      </div>
      <div>
        <div className="hover:border-[#888888] flex justify-center hover:scale-[1.02] transition-all duration-[500ms] bg-[#2d2d2d] hover:border-2px w-[25rem] h-[51rem] z-20 rounded-[1.5rem]"
        >
          <span className="text-[#ff6600] uppercase flex items-center font-light">and here will be something cool</span>

        </div>
      </div>
    </div>
  )
}
