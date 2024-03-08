import React from 'react';
import BgImage from '../../BgImage';
import { centuryGothic } from '@/app/utils/fonts';

const Header = () => {
    return (
        <div>
            <BgImage
                src={'/images/bg-img-2.webp'}
                className="h-full max-h-[112px] w-full max-w-[1335px]"
            />
            <div className=" relative z-10 flex flex-col">
                <h2
                    className={`${centuryGothic.className} font-century-gothic h-[106px] text-clamp-l font-bold`}
                >
                    Терапия <span className=" uppercase">ХОБЛ</span>: что в
                    фокусе?
                </h2>
                <h3 className="mb-[38px] mt-[26px] rounded-[20px] bg-cust-yellow px-[30px] pb-[18px] pt-[22.5px] text-center text-clamp-m font-bold">
                    Даже 1 среднетяжелое обострение — сигнал к увеличению объема
                    терапии
                </h3>
                <p className="text-center text-clamp-s font-bold">
                    Приоритетные направления фармакотерапевтической стратегии
                    при ХОБЛ<sup>1</sup>:
                </p>
            </div>
        </div>
    );
};

export default Header;
