import { memo } from 'react';
import IconLogo from '@/public/logo.svg';
import { TypographyP } from '../../TypographyP';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface AppLogoProps {
    className?: string;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className } = props;

    return (
        <Link href='/' className={cn(className, 'group')}>
            <IconLogo className='w-4 h-4 group-hover:text-blue-400 transition-colors duration-200' />
            <TypographyP className='font-extrabold text-lg'>
                <span className='text-blue-700'>Kino</span>area
            </TypographyP>
        </Link>
    );
});

AppLogo.displayName = 'AppLogo';
