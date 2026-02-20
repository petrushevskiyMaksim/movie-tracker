import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TitleProps {
    children: ReactNode;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;
}

const levelStyles = {
    1: 'text-4xl font-bold',
    2: 'text-[32px] md:text-[40px] 2xl:text-[65px] font-black leading-[1]',
    3: 'text-base 2xl:text-lg font-bold',
    4: 'text-xl font-medium',
    5: 'text-lg font-medium',
    6: 'text-base font-medium',
} as const;

const tags = {
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4',
    5: 'h5',
    6: 'h6',
} as const;

export const Title = ({ children, level = 1, className }: TitleProps) => {
    const Tag = tags[level];

    return <Tag className={cn(levelStyles[level], className)}>{children}</Tag>;
};
