import { Noto_Sans } from 'next/font/google';
import localFont from 'next/font/local';

export const centuryGothic = localFont({
   src: '../../fonts/CenturyGothic-Bold.woff2',
    display: 'swap',
    style: 'normal',
    variable: '--font-gothic',
});

export const noto = Noto_Sans({
    weight: ['300', '400', '700'],
    style: 'normal',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-noto',
});
