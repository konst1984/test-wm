'use client';
import React, { FC, useState } from 'react';
import BgImage from '../../BgImage';
import Image from 'next/image';
import Pointer from '@/app/Icons/Pointer';

interface IBlock {
    icon: string;
    text: string;
    question: React.ReactNode;
    children: React.ReactNode;
    btnColor: string;
    minHeight?: string;
}
const Block: FC<IBlock> = ({
    icon,
    question,
    children,
    text,
    btnColor,
    minHeight,
}) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="relative flex flex-col">
            <div
                className={`${isOpen ? 'hidden' : 'flex animate-fadein'} ${minHeight} flex flex-col flex-wrap items-center justify-center gap-5 rounded-[20px] border border-primary px-5 py-5 text-clamp-s shadow-3xl md:flex-row md:flex-nowrap md:items-start md:justify-between md980:pb-[44px] md980:pl-[38px] md980:pr-[70px] md980:pt-[40px]`}
            >
                <div>
                    <Image
                        src={icon}
                        alt={''}
                        width={80}
                        height={80}
                        className="min-h-20 min-w-20 shrink-0"
                    />
                </div>
                <div className="relative flex h-full min-h-20 min-w-[200px] items-center pr-5 md980:mr-0 md980:min-w-[295px]">
                    <BgImage
                        src={'/images/Group-120.webp'}
                        className="h-full min-h-full w-full md:min-h-[115px]"
                    />
                    <p className="relative z-10 leading-[36px] md:max-w-[248px]">
                        {question}
                    </p>
                </div>
                <div className="relative line-clamp-3 w-full max-w-[747px] leading-[30px] after:absolute after:bottom-0 after:block after:h-[50px] after:w-full after:bg-gradient-to-b after:from-transparent after:to-white">
                    <p>{text}</p>
                </div>
            </div>
            <button
                className="transistion-transform absolute -right-6 -top-6 z-10 h-12 w-12 duration-300 hover:scale-110 focus-visible:scale-110 active:scale-90"
                style={{ color: btnColor }}
                title={`${isOpen ? 'Read less' : 'Read more'}`}
                onClick={() => setOpen(!isOpen)}
            >
                <Pointer />
            </button>
            <div className={`${isOpen ? 'block animate-fadein' : 'hidden'}`}>
                {children}
            </div>
        </div>
    );
};

export default Block;
