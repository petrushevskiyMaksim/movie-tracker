import { memo } from 'react';
import { AppLogo } from '@/app/components/shared/AppLogo';
import BurgerIcon from '@/public/burger.svg';
import SearchIcon from '@/public/search.svg';
import { Button } from '@/app/components/shared/Button';
import { SocialList } from '@/app/components/shared/SocialList';
import VkontakteIcon from '@/public/vk.svg';
import FacebookIcon from '@/public/facebook.svg';
import TwitterIcon from '@/public/twitter.svg';
import GoogleIcon from '@/public/google.svg';
import { Item } from '@/app/components/shared/SocialList/ui/SocialList';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface HeaderProps {
    className?: string;
}

export const Header = memo((props: HeaderProps) => {
    const { className = '' } = props;
    const icons = [BurgerIcon, SearchIcon];
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

    const navButtons = icons.map((Icon, i) => {
        return (
            <Button
                key={`key button ${i}`}
                className='max-h-7 px-1.75 py-2 bg-foreground hover:bg-foreground/80'
            >
                <Icon className='text-primary hover:text-primary/80' />
            </Button>
        );
    });

    return (
        <header className={cn(className)}>
            <div className='flex gap-1'>{navButtons}</div>
            <div className='flex flex-col gap-2.5 self-start'>
                <AppLogo className='flex items-center gap-1' />

                <SocialList
                    items={socialIcons}
                    linkClassName='text-foreground/20 hover:text-foreground'
                    className='flex items-center gap-4'
                />
            </div>
            <Button className='max-h-7 px-3 py-1.5 font-bold text-xs bg-primary hover:bg-primary/80 hover:text-foreground/80 shadow-btn'>
                Войти
            </Button>
        </header>
    );
});

Header.displayName = 'Header';
