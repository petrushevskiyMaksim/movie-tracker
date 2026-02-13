import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

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
                <div
                    className='fixed w-full bg-cover bg-center bg-no-repeat opacity-25'
                    style={{
                        backgroundImage: "url('/image/bg-home.png')",
                        aspectRatio: '16/12',
                    }}
                />
                {children}
            </body>
        </html>
    );
}
