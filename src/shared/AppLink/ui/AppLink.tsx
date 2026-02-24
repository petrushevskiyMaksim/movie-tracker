import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface AppLinkProps {
    className?: string;
    href: string;
    children: ReactNode;
}

export const AppLink = (props: AppLinkProps) => {
    const { className = '', href, children } = props;
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            className={cn(
                '',
                className,
                isActive ? 'bg-primary-foreground' : ''
            )}
            target='_blank'
            href={href}
        >
            {children}
        </Link>
    );
};
