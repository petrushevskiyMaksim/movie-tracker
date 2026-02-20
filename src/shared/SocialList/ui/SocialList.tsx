import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ReactNode } from 'react';

export interface Item {
    item: ReactNode;
    href: string;
}

interface SocialListProps {
    className?: string;
    itemClassName?: string;
    linkClassName?: string;
    items: Item[];
}

export const SocialList = (props: SocialListProps) => {
    const { className = '', items, linkClassName, itemClassName } = props;

    return (
        <ul className={cn('', className)}>
            {items.map((item, i) => {
                return (
                    <li
                        key={`Key for social item ${i}`}
                        className={cn(itemClassName)}
                    >
                        <Link
                            className={cn(
                                'transition duration-300',
                                linkClassName
                            )}
                            href={item.href}
                        >
                            {item.item}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
