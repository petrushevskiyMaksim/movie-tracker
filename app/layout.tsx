import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Header } from '@/src/widget/Header';

const montserratSans = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Movie Tracker - Ваш персональный киножурнал',
    description:
        'Отслеживайте просмотренные фильмы, составляйте списки желаний',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='ru'>
            <body className={`${montserratSans.variable} antialiased`}>
                <div className='mx-auto px-4 pt-2.5 pb-8 max-w-373.5 md:px-6 lg:px-8'>
                    <Header className='grid grid-cols-[auto_1fr_auto] gap-y-6 grid-area-header 2xl:grid-cols-[auto_1fr_content_fit-content]' />
                    {children}
                </div>
            </body>
        </html>
    );
}
