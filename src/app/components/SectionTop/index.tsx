import React from 'react';
import SectionContentWrapper from '../SectionContentWrapper';
import BgImage from '../BgImage';
import Block from './Block';
import { SectionTopData } from '@/app/data';
import TrendBlock from './TrendBlock';
import StaticticsBlock from './StaticticsBlock';
import { centuryGothic } from '@/app/utils/fonts';
interface IBlockData {
    [key: string]: React.ReactNode;
}
const SectionTop = () => {
    const BlockData: IBlockData = {
        trend: <TrendBlock />,
        stat: <StaticticsBlock />,
    };

    return (
        <SectionContentWrapper>
            <div className="relative px-3 pb-[110px] pt-[12px] sm:px-[45px]">
                <div className="flex flex-col gap-9">
                    <BgImage
                        src={'/images/bg-img-2.webp'}
                        className="h-full max-h-[110px] w-full max-w-[1335px]"
                    />
                    <h2
                        className={`${centuryGothic.className} font-century-gothic relative z-10 h-[110px] text-clamp-l -tracking-[2px] [word-spacing:2px]`}
                    >
                        <span className=" uppercase">ХОБЛ</span>: мифы и
                        реальность
                    </h2>
                    <div className="relative z-10 flex flex-col gap-10">
                        {SectionTopData.map((item, index) => (
                            <Block
                                key={item.id}
                                {...item}
                                minHeight={
                                    index > 0 ? 'md980:min-h-[212px]' : ''
                                }
                            >
                                {BlockData[item.id]}
                            </Block>
                        ))}
                    </div>
                </div>
            </div>
        </SectionContentWrapper>
    );
};

export default SectionTop;
