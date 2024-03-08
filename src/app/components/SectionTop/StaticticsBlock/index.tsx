import React from 'react';
import Image from 'next/image';

const StaticticsBlock = () => {
    return (
        <div className="wrapper-dropdown-block gap-7">
            <div className="flex flex-col [word-spacing:2px]">
                <p className="relative bottom-[6px]">
                    В десятилетнем исследовании{' '}
                    <strong>
                        «Генетическая эпидемиология ХОБЛ» (COPDGene)
                    </strong>{' '}
                    среди пациентов с ХОБЛ, диагностированной до 55 лет, было
                    выявлено <strong>преобладание женщин (66%)</strong>,<br />а
                    в возрасте 60-64 лет количество женщин и мужчин.{' '}
                </p>
                <p className="relative bottom-[6px]">
                    Такое эпидемиологическое распределение заболеваемости ХОБЛ
                    может быть связано с тем, что дыхательные пути курящих
                    женщин имеют более
                    <strong> высокий процент площади стенок</strong>, но меньшую
                    площадь просвета, внутренний диаметр и толщину дыхательных
                    путей по сравнению с курящими мужчинами.
                </p>
            </div>
            <div>
                <Image
                    src="/images/diagram.webp"
                    width={80}
                    height={80}
                    className="w-full shrink-0"
                    alt="Diagram"
                    sizes="(max-width: 1920px) 75vw, 100vw"
                />
            </div>
        </div>
    );
};

export default StaticticsBlock;
