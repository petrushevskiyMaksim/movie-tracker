import { memo } from 'react';
import IconLogo from '@/public/logo.svg';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Text } from '../../Typography/Text';

interface AppLogoProps {
    className?: string;
}

export const AppLogo = memo((props: AppLogoProps) => {
    const { className } = props;

    return (
        <Link href='/' className={cn(className, 'hover:opacity-80')}>
            <IconLogo className='w-4 h-4 2xl:w-6 2xl:h-6' />
            <Text className='font-extrabold text-lg  2xl:text-[25px]'>
                <span className='text-blue-700'>Kino</span>area
            </Text>
        </Link>
    );
});

AppLogo.displayName = 'AppLogo';
