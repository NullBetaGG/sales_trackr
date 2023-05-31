import { UserOctagon } from 'iconsax-react';

export function Header() {
    const userName = 'Fábio Oliveira';
    const userMail = 'fabio@germinareagro.com.br'
    return (
        <header className="bg-black h-[10rem] rounded-2xl m-[.5rem] flex justify-end text-white  bg-gradient-to-r from-black from-18% via-[#ff6600] via-62% to-[#0f900a] to-83%">
            <div className="text-[#ffffff] opacity-90 text-[0.9rem] flex flex-col justify-end w-[15rem] h-[3.5rem] mt-[-0.5rem] font-light">
                <span className="justify-end flex">{userName}</span>
                <span className="justify-end flex">{userMail}</span>
            </div>
            <div className="mr-3 w-[3.5rem] h-[3.5rem] rounded-full flex items-center justify-center">
                <button className="hover:scale-110 transition-transform duration-300 hover:border-2px">
                    <UserOctagon size="38" color="#ff6600" variant="Broken" />
                </button>
            </div>
        </header>
    )
}