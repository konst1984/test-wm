import React, { FC } from 'react';

interface IBgImage {
    src: string;
    className: string;
}
const BgImage: FC<IBgImage> = ({ src, className }) => {
    return (
        <div
            className={`absolute left-0 right-0 top-0 ${className}`}
            style={{
                background: `url(${src}) center top/100% 100% no-repeat`,
            }}
        />
    );
};

export default BgImage;
