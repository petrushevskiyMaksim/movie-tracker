'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import { AppLink } from '@/src/shared/AppLink';

export interface Category {
    id: number;
    name: string;
    href: string;
}

interface CategoryListProps {
    categories: Category[];
    className?: string;
    classNameList?: string;
    classNameItem?: string;
    classNameLink?: string;
}

export const Navigation = (props: CategoryListProps) => {
    const {
        className = '',
        categories,
        classNameList,
        classNameItem,
        classNameLink,
    } = props;

    return (
        <nav className={cn('', className)}>
            <ul className={classNameList}>
                {categories.map((category) => {
                    return (
                        <li
                            key={`Navigation key ${category.id}`}
                            className={cn('', classNameItem)}
                        >
                            <AppLink
                                className={cn(
                                    'px-2 py-2 rounded-sm hover:bg-primary-foreground/80',
                                    classNameLink
                                )}
                                href={category.href}
                            >
                                {category.name}
                            </AppLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
