import React, { FC } from 'react';

interface IArrow {
    className?: string;
}

const Arrow: FC<IArrow> = ({className}) => {
    return (
        <svg
            width="full"
            height="full"
            viewBox="0 0 26 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M13 21L0.00961862 0.749999L25.9904 0.750002L13 21Z"
                fill="currentColor"
            />
        </svg>
    );
};

export default Arrow;
