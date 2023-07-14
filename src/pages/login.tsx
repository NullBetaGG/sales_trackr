import { Player } from '@lottiefiles/react-lottie-player';
import React, { useState } from 'react';
import { User } from '@/types/users';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { message, notification } from 'antd';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messageApi, contextHolder] = message.useMessage();
  const [api, contextNotification] = notification.useNotification();
  const router = useRouter();
  const key = 'updatable';
  const users: User[] = [
    { mail: 'jose@germinareagro.com.br', password: 'a33rdc#', admin: true, name: 'José Jorge' },
    { mail: 'ernani@germinareagro.com.br', password: 'l45dop@', admin: true, name: 'Ernani Nito' },
    { mail: 'fabio@germinareagro.com.br', password: 'fabio91', admin: true, name: 'Fábio Oliveira' },
    { mail: 'test@germinareagro.com.br', password: 'test11', admin: true, name: 'Testes' },
    { mail: 'conrado@germinareagro.com.br', password: 'pltre@', admin: true, name: 'Conrado Zanon' },
    { mail: 'admin@germinareagro.com.br', password: 's8gst#', admin: true, name: 'Administrador' }
  ];

  async function validLogin() {
    if (users) {
      const authenticatedUser = users.find(
        (user) => user.mail === email && user.password === password
      );

      if (authenticatedUser) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', authenticatedUser.name)
        localStorage.setItem('userMail', authenticatedUser.mail)
        openMessage();
      } else {
        openNotification();
      }
    }
  };

  const openNotification = () => {
    api.error({
      message: `Atenção`,
      description: 'Dados inseridos não são válidos!',
    });
  };

  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Carregando...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Bem vindo!',
        duration: 2,
      });
      setTimeout(() => {
        router.push('/');
      }, 990);
    }, 1000);
  };

  return (
    <>
      {contextHolder}
      {contextNotification}
      <div className="flex text-[#ffffff] bg-white h-[100vh] relative">
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
            <input
              type="email"
              className="py-3 outline-none rounded-md placeholder:pl-2 shadow-md text-black pl-2"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <span className="text-textGreyVariant mt-8 text-[1rem]">Senha:</span>
            <input
              type="password"
              className="py-3 outline-none rounded-md placeholder:pl-2 shadow-md text-black pl-2"
              placeholder="Senha"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              className="py-3 hover:bg-[#2e2e2e] bg-[#2d2d2d] transition-transform duration-300
                        mt-5 hover:scale-[1.03] flex flex-row w-full rounded-md items-center justify-center text-[#ffffff]
                        hover:border-[1px] text-[1rem] font-light hover:border-[#888888]"
              onClick={validLogin}
            >
              Entrar
            </button>
          </div>
          <Image
            className="absolute bottom-0 left-0 ml-4 mb-4"
            src="/img/germinare.png"
            alt="Logo Germinare"
            width={90} height={50}
          />
        </div>
        <div className="bg-[#8d8d8d] w-[60vw] flex">
          <Image src="/img/back_3.jpg"
            alt="Logo Germinare"
            width={1500} height={10}
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
      </div >
    </>
  )
}