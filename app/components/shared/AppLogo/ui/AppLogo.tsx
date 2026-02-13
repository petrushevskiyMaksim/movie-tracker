import { memo } from 'react';
import IconLogo from '@/public/logo.svg';
import { TypographyP } from '../../TypographyP';

interface AppLogoProps {
    className?: string;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className } = props;

    return (
        <div className={className}>
            <IconLogo className='w-4 h-4 hover:text-blue-400' />
            <TypographyP className='font-extrabold text-lg'>
                <span className='text-blue-700'>Kino</span>area
            </TypographyP>
        </div>
    );
});

AppLogo.displayName = 'AppLogo';
