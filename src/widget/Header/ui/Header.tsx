import { memo } from 'react';
import { AppLogo } from '@/src/shared/AppLogo';
import BurgerIcon from '@/public/burger.svg';
import SearchIcon from '@/public/search.svg';
import { SocialList } from '@/src/shared/SocialList';
import VkontakteIcon from '@/public/vk.svg';
import FacebookIcon from '@/public/facebook.svg';
import TwitterIcon from '@/public/twitter.svg';
import GoogleIcon from '@/public/google.svg';
import { Item } from '@/src/shared/SocialList/ui/SocialList';
import { cn } from '@/lib/utils';
import { Category, Navigation } from '@/src/features/Navigation';
import { Button } from '@/components/ui';

interface HeaderProps {
    className?: string;
}

const socialIcons: Item[] = [
    {
        item: <VkontakteIcon />,
        href: 'https://vk.com',
    },
    {
        item: <FacebookIcon />,
        href: 'https://facebook.com',
    },
    {
        item: <TwitterIcon />,
        href: 'https://twitter.com',
    },
    {
        item: <GoogleIcon />,
        href: 'https://workspace.google.com/intl/ru/gmail/',
    },
];

const categories: Category[] = [
    {
        id: 1,
        name: 'Афиша',
        href: '/affiche',
    },
    {
        id: 2,
        name: 'Медиа',
        href: '/media',
    },
    {
        id: 3,
        name: 'Фильмы',
        href: '/films',
    },
    {
        id: 4,
        name: 'Актёры',
        href: '/actors',
    },
    {
        id: 5,
        name: 'Новости',
        href: '/news',
    },
    {
        id: 6,
        name: 'Подборки',
        href: '/collections',
    },
    {
        id: 7,
        name: 'Категории',
        href: '/categories',
    },
];

export const Header = memo((props: HeaderProps) => {
    const { className = '' } = props;

    return (
        <header className={cn(className)}>
            <div className='flex area-left gap-1 2xl:area-button-search'>
                <Button className='h-7 w-7 p-1 cursor-pointer md:hidden'>
                    <BurgerIcon />
                </Button>
                <Button className='w-7 md:w-10 lg:w-10.5 2xl:w-13 h-7 md:h-9.5 lg:h-10.5 2xl:h-13 p-1 cursor-pointer'>
                    <SearchIcon width={15} height={15} />
                </Button>
            </div>
            <div className='area-logo justify-self-center flex flex-col gap-2.5'>
                <AppLogo className='flex items-center gap-1' />

                <SocialList
                    items={socialIcons}
                    className='flex items-center 2xl:justify-between gap-4'
                    itemClassName='text-foreground/20 hover:text-foreground'
                />
            </div>
            <Button
                variant={'secondary'}
                className='area-right h-7 md:h-9.5 lg:h-10.5 2xl:h-13 px-3 md:px-6.5 py-1.5 md:py-2 font-bold text-xs md:text-sm 2xl:text-base shadow-btn cursor-pointer 2xl:area-button-login 2xl:ml-3'
            >
                Войти
            </Button>
            <Navigation
                categories={categories}
                className='hidden md:block area-nav justify-self-center 2xl:self-center'
                classNameList='flex gap-8 font-bold text-xs  2xl:text-lg'
                classNameItem='hover:text-primary/80 cursor-pointer'
            />
        </header>
    );
});

Header.displayName = 'Header';
