import React from 'react';
import SectionContentWrapper from '../SectionContentWrapper';
import Header from './Header';
import MainContent from './MainContent';

const SectionMain = () => {
    return (
        <SectionContentWrapper>
            <div className="relative px-3 pb-[103px] pt-[16px] sm:px-[45px]">
                <div className="flex flex-col gap-[50px]">
                    <Header />
                    <MainContent />
                </div>
            </div>
        </SectionContentWrapper>
    );
};

export default SectionMain;
