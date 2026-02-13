import { memo } from 'react';
import { AppLogo } from '@/app/components/shared/AppLogo';
import BurgerIcon from '@/public/burger.svg';
import SearchIcon from '@/public/search.svg';
import { Button } from '@/app/components/shared/Button';

interface HeaderProps {
    className?: string;
}

export const Header = memo((props: HeaderProps) => {
    const icons = [BurgerIcon, SearchIcon];
    const navButtons = icons.map((Icon, i) => {
        return (
            <Button
                key={`key button ${i}`}
                className='bg-foreground px-1.75 py-2 hover:bg-foreground/80 '
            >
                <Icon className='text-primary hover:text-primary/80' />
            </Button>
        );
    });
    return (
        <>
            {navButtons}
            <AppLogo className='flex items-center gap-1' />
            <Button className='px-3 py-1.5 font-bold text-xs bg-primary hover:bg-primary/80 hover:text-foreground/80 shadow-btn'>
                Войти
            </Button>
        </>
    );
});

Header.displayName = 'Header';
