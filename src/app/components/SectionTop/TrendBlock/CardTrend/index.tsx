import React, { FC } from 'react';
import Image from 'next/image';

interface ICardTrend {
    icon: string;
    number: string;
    text: React.ReactNode;
    footnote: string;
}

const CardTrend: FC<ICardTrend> = ({ icon, number, text, footnote }) => {
    return (
        <div className="flex flex-col rounded-[20px] bg-[rgba(253,217,102,0.25)] px-3 py-3 text-center md:px-4 md:py-[30px]">
            <div>
                <Image
                    src={icon}
                    width={80}
                    height={80}
                    className="h-full max-h-20 w-full shrink-0 md:max-h-[134px]"
                    alt="Diagram"
                />
            </div>
            <p className="text-clamp-xl flex-grow-1 top-[15px] relative font-bold">
                {number}
            </p>
            <p className="[font-size:clamp(1em,1.8vw,26px)]">{text}</p>
            <p className="top-2 relative text-lg font-light">{footnote}</p>
        </div>
    );
};

export default CardTrend;
