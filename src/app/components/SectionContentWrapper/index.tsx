import React, { FC } from 'react';

interface ISection {
    children: React.ReactNode;
}

const SectionContentWrapper: FC<ISection> = ({ children }) => {
    return (
        <div className="m-auto w-full max-w-[1380px] bg-white">
                {children}
        </div>
    );
};

export default SectionContentWrapper;
