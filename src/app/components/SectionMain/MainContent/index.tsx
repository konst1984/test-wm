import Arrow from '@/app/Icons/Arrow';
import { SectionBottomData } from '@/app/data';
import React from 'react';
import Block from '../Block';
import Wrapper from '../Wrapper';

const MainContent = () => {
    return (
        <div className="grid gap-y-10 md980:gap-y-0">
            <div className="grid grid-cols-1 justify-center gap-x-[30px] gap-y-20 md980:grid-cols-3">
                {SectionBottomData.strategies.map((item, index) => (
                    <Block key={item.id} {...item} number={index + 1}>
                        {item?.title}
                    </Block>
                ))}
                {SectionBottomData.therapy.map((item) => (
                    <Wrapper
                        key={item.id}
                        {...item}
                        className="relative m-auto grid max-w-[90%] px-[19px] md980:hidden"
                    >
                        <div className="absolute -top-16 left-1/2 h-12 w-12 -translate-x-1/2 rotate-180">
                            <Arrow className="text-light-green" />
                        </div>
                        {item.text}
                        <div className="tex-light-green absolute -bottom-16 left-1/2 h-12 w-12 -translate-x-1/2">
                            <Arrow className="text-light-green" />
                        </div>
                    </Wrapper>
                ))}
            </div>
            <div className="mb-[42px] hidden items-center justify-center gap-[30px] md980:flex">
                <div className="relative h-[33px] w-full max-w-[425px] border border-primary border-t-transparent">
                    <div className="absolute -bottom-[85%] left-1/2 flex h-[30px] w-[28px] -translate-x-1/2 justify-center">
                        <Arrow />
                    </div>
                </div>
                <div className="relative h-[33px] w-full max-w-[425px] border border-primary border-t-transparent">
                    <div className="absolute -bottom-[85%] left-1/2 flex h-[30px] w-[28px] -translate-x-1/2 justify-center">
                        <Arrow />
                    </div>
                </div>
            </div>
            <div className="hidden grid-cols-fit gap-[30px] text-clamp-s md980:grid">
                {SectionBottomData.therapy.map((item) => (
                    <Wrapper
                        key={item.id}
                        className="hidden pl-10 pr-12 leading-[33px] md980:grid"
                    >
                        {item.text}
                    </Wrapper>
                ))}
            </div>
        </div>
    );
};

export default MainContent;
