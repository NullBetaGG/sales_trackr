import Image from 'next/image';
import { Player } from '@lottiefiles/react-lottie-player';
import {
    AlignHorizontally,
    Activity,
    MoneyRecive,
    Map,
    Element4,
    Coin1,
    Setting2
} from 'iconsax-react';

export function Sidebar() {
    return (
        <div>
            <div className="hover:w-[12rem] group/sidebar h-[100vh] w-[5.2rem] bg-[#0b0b0b] mt-[-10.5rem] transition-all duration-500 rounded-[1rem] max-w[12rem] fixed">
                <div className="w-[3.1rem] h-[3.1rem] bg-[#eb000000] rounded-[50%] border-[3px] border-[#ff6600] box-border ml-[1rem] mt-[1rem]">
                    <Player
                        className="mt-[-2rem]"
                        autoplay
                        loop
                        src="https://assets8.lottiefiles.com/packages/lf20_gegtprwi.json"
                        style={{ height: '45px', width: '45px' }}
                    >
                    </Player>
                </div>
                <div className="relative mt-[0.5rem] font-montserrat">
                    <span className="ml-[1.4rem] text-base block">Sales</span>
                    <span className="ml-[1.2rem] text-base block">Trackr</span>
                </div>
                <div className="absolute bottom-0 left-0 ml-[1.8rem] mb-[1rem]">
                    <Image src="/img/g.png" alt="Logo Germinare" width={20} height={30} />
                </div>
                <div className="mt-20 ml-6">
                    <div className="flex mt-[1.5rem]">
                        <button className="flex items-center">
                            <Element4 size="28" color="#ff6600" variant="TwoTone" />
                            <span className="hidden group-hover/sidebar:flex ml-[1rem]">Dashboard</span>
                        </button>
                    </div>
                    <div className="flex mt-[1.5rem]">
                        <button>
                            <Activity size="28" color="#ff6600" variant="TwoTone" />
                        </button>
                    </div>
                    <div className="flex mt-[1.5rem]">
                        <button>
                            <Coin1 size="28" color="#ff6600" variant="TwoTone" />
                        </button>
                    </div>
                    <div className="flex mt-[1.5rem]">
                        <button>
                            <Map size="28" color="#ff6600" variant="TwoTone" />
                        </button>
                    </div>
                    <div className="flex mt-[1.5rem]">
                        <button>
                            <MoneyRecive size="28" color="#ff6600" variant="TwoTone" />
                        </button>
                    </div>
                    <div className="flex mt-[1.5rem]">
                        <button>
                            <Setting2 size="28" color="#ff6600" variant="TwoTone" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}