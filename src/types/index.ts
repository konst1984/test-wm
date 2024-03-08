import React from 'react';
export interface ISecrtionTopData {
  id: string;
  icon: string;
  text: string;
  question: React.ReactNode;
  btnColor: string;
}

interface IDescription {
    id: number;
    icon: string;
    text: React.ReactNode;
    title: React.ReactNode;
    orderModile: string;
  }

export interface ISectionBottomData {
  strategies:IDescription[];
  therapy: Omit<IDescription, 'icon' | 'title'>[];
}

export interface ICardTrendData   {
        id: number,
        icon: string,
        number: string,
        text: React.ReactNode,
        footnote: string,
    }