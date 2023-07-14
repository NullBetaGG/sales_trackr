import { useEffect, useState } from 'react';
import { Logout } from 'iconsax-react';
import { Button, Modal } from 'antd'
import { useRouter } from 'next/router';


export function Header() {
  const [homolog, setHomolog] = useState(false);
  const [userName, setUserName] = useState<any>('Name');
  const [userMail, setUserMail] = useState<any>('Mail');
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const name = localStorage.getItem('userName');
    const mail = localStorage.getItem('userMail');
    setUserName(name);
    setUserMail(mail);
  }, []);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userName');
      localStorage.removeItem('userMail');
      router.push('/login')
    }, 1500);
  };

  const handleCancel = () => {
    setOpen(false);
  };


  return (
    <div>
      <header className="h-[10rem] rounded-2xl m-[.5rem] flex justify-end text-white  bg-[#191919]">
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
          <button
            className="hover:scale-110 transition-transform duration-300 hover:border-2px"
            onClick={showModal}
          >
            <Logout size="40" color="#ff6600" variant="Broken" />
          </button>
        </div>
      </header>
      <Modal
        open={open}
        title="Logout"
        onOk={handleOk}
        onCancel={handleCancel}
        width={200}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Não
          </Button>,
          <Button className="bg-[#ff0000] text-[#ffffff]" key="submit" loading={loading} onClick={handleOk}>
            Sim
          </Button>
        ]}
        style={{ right: 0, transform: 'none', marginRight: '60px', marginTop: '-40px' }}
      >
        <p>Deseja sair?</p>
      </Modal>
    </div>
  )
}