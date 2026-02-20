import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface ButtonProps {
    className?: string;
    children: ReactNode;
}

export const Button = (props: ButtonProps) => {
    const { className = '', children } = props;

    return (
        <button
            className={cn(
                'flex items-center justify-center rounded-sm cursor-pointer',
                className
            )}
        >
            {children}
        </button>
    );
};
