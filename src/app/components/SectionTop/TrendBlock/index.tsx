import React from 'react';
import { CardTrendData } from '@/app/data';
import CardTrend from './CardTrend';

const TrendBlock = () => {
    return (
        <div className="wrapper-dropdown-block gap-[33px]">
            <div className="flex flex-col justify-between text-clamp-s">
                <p className="font-bold [word-spacing:2px]">
                    Большинство пациентов с ХОБЛ столкнется с обострениями: как
                    минимум одно среднетяжелое или тяжелое обострение случится в
                    течение 3 лет у 77% пациентов<sup>1</sup>.
                </p>
                <p>
                    В течение 5 лет после первого тяжёлого обострения в живых
                    остаются только 40% пациентов.2 Прогноз после обострений
                    ХОБЛ схож с таковым при сердечной недостаточности, инфаркте
                    миокарда и некоторых злокачественных опухолях.
                </p>
            </div>
            <h4 className="text-center font-bold [font-size:_clamp(1.25em,1.8vw,30px)]">
                Пятилетняя выживаемость пациентов
            </h4>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-[54px]">
                {CardTrendData.map((item) => (
                    <CardTrend key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default TrendBlock;
