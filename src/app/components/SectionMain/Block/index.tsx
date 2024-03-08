import React, { FC } from 'react';
import Image from 'next/image';

interface IBlock {
    icon?: string;
    text: React.ReactNode;
    children: React.ReactNode;
    number?: number;
    orderModile: string;
}

const Block: FC<IBlock> = ({ icon, children, text, number, orderModile }) => {
    return (
        <div
            className={`${orderModile}  relative grid min-w-[220px] max-w-full grid-rows-[auto_auto_1fr] justify-items-center gap-[9px] rounded-[20px] bg-cust-gradient px-[19px] py-[30px] shadow-3xl`}
        >
            <div className="relative">
                <Image
                    src={'/images/Group_7.svg'}
                    alt={''}
                    width={80}
                    height={80}
                    className="min-h-[145px] min-w-[178px] shrink-0"
                />
                <span className="absolute right-[16%] top-[55%] text-5xl font-bold">
                    {number}
                </span>
            </div>
            <h4 className="text-center text-clamp-m">{children}</h4>
            <p
                className={`${icon ? 'text-center' : 'text-left'} text-clamp-s leading-[34px]`}
            >
                {text}
            </p>
        </div>
    );
};

export default Block;
