import { Inter, Lusitana } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700'] });

export const myFonts = {
    inter,
    lusitana,
};
