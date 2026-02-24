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
    console.log(pathname);

    return (
        <Link
            className={cn(
                'px-2 py-2 rounded-sm hover:bg-primary-foreground/80',
                className,
                pathname === href ? 'bg-primary-foreground' : ''
            )}
            target='_blank'
            href={href}
        >
            {children}
        </Link>
    );
};
