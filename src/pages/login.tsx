import { Player } from '@lottiefiles/react-lottie-player';
import Image from 'next/image';

export default function Login() {
    return (
        <div className="flex bg-white h-[100vh] relative">
            <div className="bg-[#000000] w-[40vw] flex h-[100vh] items-center relative z-10">
                <div className="flex ml-[11rem] mt-[-10rem] flex-col">
                    <Player
                        autoplay
                        loop
                        src="https://assets8.lottiefiles.com/packages/lf20_gegtprwi.json"
                        style={{ height: '200px', width: '200px' }}
                    >
                    </Player>
                    <h1 className="border-b-[1px] text-[3rem] ml-[1.2rem] uppercase border-borderGrey p-2 w-[22rem] items-center flex justify-center">
                        <span className="text-[#ff6600]">S</span>
                        <p>ales</p>
                        <span>&nbsp;</span>
                        <span className="text-[#19bf1e]">T</span>
                        <p>rackr</p>
                    </h1>
                    <h2 className="text-[1.1rem] uppercase font-light mt-6 ml-[5.5rem]">Entre com sua conta</h2>
                    <span className="text-textGreyVariant text-[1rem] mt-14 w-[20vw]">Email:</span>
                    <input type="email" className="py-3 outline-none rounded-md placeholder:pl-2 shadow-md text-black pl-2" placeholder="Email"></input>
                    <span className="text-textGreyVariant mt-8 text-[1rem]">Senha:</span>
                    <input type="password" className="py-3 outline-none rounded-md placeholder:pl-2 shadow-md text-black pl-2" placeholder="Senha"></input>
                    <button
                        className="
                        py-3 hover:bg-[#2e2e2e] bg-[#2d2d2d] transition-transform duration-300 mt-5 hover:scale-105 flex flex-row w-full rounded-md items-center justify-center text-[#ffffff]  hover:border-[1px] text-[1rem] font-light hover:border-[#888888]"
                    >
                        Entrar
                    </button>
                </div>
                <Image className="absolute bottom-0 left-0 ml-4 mb-4" src="/img/germinare.png" alt="Logo Germinare" width={90} height={50} />
            </div>
            <div className="bg-[#8d8d8d] w-[60vw] flex">
                <Image src="/img/back_3.jpg" alt="Logo Germinare" width={1500} height={10} />
                <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
        </div >
    )
}