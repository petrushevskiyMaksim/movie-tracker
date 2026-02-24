'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import { NavigationItem } from './NavigationItem';

export interface Category {
    id: number;
    name: string;
    href: string;
}

interface CategoryListProps {
    className?: string;
    classNameList?: string;
    classNameItem?: string;
    categories: Category[];
}

export const Navigation = (props: CategoryListProps) => {
    const { className = '', categories, classNameList, classNameItem } = props;
    const [isActive, setIsActive] = useState();

    return (
        <nav className={cn('', className)}>
            <ul className={classNameList}>
                {categories.map((category) => {
                    return (
                        <NavigationItem
                            key={`Category ${category.id}`}
                            item={category}
                            className={cn('', className)}
                        />
                    );
                })}
            </ul>
        </nav>
    );
};
