import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useRouter } from 'next/router';

export function ShowModal(props: any) {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const router = useRouter();

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
        <>
            <button className={props.buttonStyle} onClick={showModal}>
                <>{props.buttonContent}</>
            </button>
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
                <p>{props.content}</p>
            </Modal>
        </>
    );
};
