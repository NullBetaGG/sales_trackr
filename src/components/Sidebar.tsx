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
import { useRouter } from 'next/router';

export function Sidebar() {
    const router = useRouter();
    return (
        <div>
            <div className="hover:w-[12rem] group/sidebar h-[100vh] w-[5.2rem] bg-[#0b0b0b] mt-[-10.5rem] transition-all duration-[1200ms] rounded-[1rem] max-w[12rem] fixed">
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
                        <button
                            onClick={() => router.push('/')}
                            className={`flex hover:scale-105 transition-transform duration-100 items-center
                            ${router.pathname === '/' ? 'bg-[#2b2b2b] rounded-lg' : ''}`}
                        >
                            <Element4 size="28" color="#ff6600" variant="TwoTone" />
                            <div className="w-[1rem] transition-all grow duration-[1000ms] group-hover/sidebar:w-[7rem] h-[1.5rem] ml-[0.5rem] border-[#ff6600]">
                                <span className="w-[1rem] font-light transition-all opacity-0 group-hover/sidebar:opacity-100">
                                    <span>Dashboard</span>
                                </span>
                            </div>
                        </button>
                    </div>
                    <div className="flex mt-[1.5rem]">
                        <button
                            onClick={() => router.push('/analytics')}
                            className={`flex hover:scale-105 transition-transform duration-100 items-center
                            ${router.pathname === '/analytics' ? 'bg-[#2b2b2b] rounded-lg' : ''}`}
                        >
                            <Activity size="28" color="#ff6600" variant="TwoTone" />
                            <div className="w-[1rem] transition-all grow duration-[1000ms] group-hover/sidebar:w-[7rem] h-[1.5rem] ml-[0.5rem] border-[#ff6600]">
                                <span className="w-[1rem] font-light transition-all opacity-0 group-hover/sidebar:opacity-100">
                                    <span>Analytics</span>
                                </span>
                            </div>
                        </button>
                    </div>
                    <div className="flex mt-[1.5rem]">
                        <button
                            onClick={() => router.push('/sales')}
                            className={`flex hover:scale-105 transition-transform duration-100 items-center
                            ${router.pathname === '/sales' ? 'bg-[#2b2b2b] rounded-lg' : ''}`}
                        >
                            <Coin1 size="28" color="#ff6600" variant="TwoTone" />
                            <div className="w-[1rem] transition-all grow duration-[1000ms] group-hover/sidebar:w-[7rem] h-[1.5rem] ml-[0.5rem] border-[#ff6600]">
                                <span className="w-[1rem] font-light transition-all opacity-0 group-hover/sidebar:opacity-100">
                                    <span>Vendas</span>
                                </span>
                            </div>
                        </button>
                    </div>
                    <div className="flex mt-[1.5rem]">
                        <button
                            onClick={() => router.push('/maps')}
                            className={`flex hover:scale-105 transition-transform duration-100 items-center
                            ${router.pathname === '/maps' ? 'bg-[#2b2b2b] rounded-lg' : ''}`}
                        >
                            <Map size="28" color="#ff6600" variant="TwoTone" />
                            <div className="w-[1rem] transition-all grow duration-[1000ms] group-hover/sidebar:w-[7rem] h-[1.5rem] ml-[0.5rem] border-[#ff6600]">
                                <span className="w-[1rem] font-light transition-all opacity-0 group-hover/sidebar:opacity-100">
                                    <span>Mapas</span>
                                </span>
                            </div>
                        </button>
                    </div>
                    <div className="flex mt-[1.5rem]">
                        <button
                            onClick={() => router.push('/suppliers')}
                            className={`flex hover:scale-105 transition-transform duration-100 items-center
                            ${router.pathname === '/suppliers' ? 'bg-[#2b2b2b] rounded-lg' : ''}`}
                        >
                            <MoneyRecive size="28" color="#ff6600" variant="TwoTone" />
                            <div className="w-[1rem] transition-all grow duration-[1000ms] group-hover/sidebar:w-[7rem] h-[1.5rem] ml-[0.5rem] border-[#ff6600]">
                                <span className="w-[1rem] font-light transition-all opacity-0 group-hover/sidebar:opacity-100">
                                    <span>Fornecedores</span>
                                </span>
                            </div>
                        </button>
                    </div>
                    <div className="flex mt-[1.5rem]">
                        <button
                            onClick={() => router.push('/settings')}
                            className={`flex hover:scale-105 transition-transform duration-100 items-center
                            ${router.pathname === '/settings' ? 'bg-[#2b2b2b] rounded-lg' : ''}`}
                        >
                            <Setting2 size="28" color="#ff6600" variant="TwoTone" />
                            <div className="w-[1rem] transition-all grow duration-[1000ms] group-hover/sidebar:w-[7rem] h-[1.5rem] ml-[0.5rem] border-[#ff6600]">
                                <span className="w-[1rem] font-light transition-all opacity-0 group-hover/sidebar:opacity-100">
                                    <span>Configurações</span>
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}