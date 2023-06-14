import { useState } from 'react';
import { Logout } from 'iconsax-react';
import { ShowModal } from '@/components/Modal';

export function Header() {
    const [homolog, setHomolog] = useState(true);
    const userName = localStorage.getItem('userName');
    const userMail = localStorage.getItem('userMail');

    return (
        <div>
            <header className="bg-black h-[10rem] rounded-2xl m-[.5rem] flex justify-end text-white  bg-gradient-to-r from-black from-18% via-[#ff6600] via-62% to-[#0f900a] to-83%">
                {homolog && (
                    <div className="bg-[#ff0000] w-[13vw] flex justify-center h-[3rem] ml-[100px] rounded-lg">
                        <b className="mt-[0.7rem]">
                            Ambiente de Desenvolvimento
                        </b>
                    </div>
                )}
                <div className="text-[#ffffff] opacity-90 text-[0.9rem] flex flex-col justify-end w-[15rem] h-[3.5rem] mt-[-0.5rem] font-light">
                    <span className="justify-end flex">{userName}</span>
                    <span className="justify-end flex">{userMail}</span>
                </div>
                <div className="mr-3 w-[3.5rem] h-[3.5rem] rounded-full flex items-center justify-center">
                    <ShowModal
                        content="Deseja sair?"
                        buttonStyle="hover:scale-110 transition-transform duration-300 hover:border-2px"
                        buttonContent=<Logout size="40" color="#ff6600" variant="Broken" />
                    />
                </div>
            </header>
        </div>

    )
}