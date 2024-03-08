import React, { FC } from 'react';

interface IWrapper {
    children: React.ReactNode;
    className?: string;
    orderModile?: string;
}

const Wrapper: FC<IWrapper> = ({ children, className, orderModile }) => {
    return (
        <div
            className={`relative min-w-[220px] max-w-full
    justify-items-center gap-[15px] rounded-[20px] bg-cust-gradient py-[30px] shadow-3xl md980:max-h-none ${className} ${orderModile} `}
        >
            {children}
        </div>
    );
};

export default Wrapper;
