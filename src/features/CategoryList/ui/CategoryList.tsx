import { cn } from '@/lib/utils';
import Link from 'next/link';

export interface Category {
    id: number;
    name: string;
}

interface CategoryListProps {
    className?: string;
    classNameList?: string;
    classNameItem?: string;
    categories: Category[];
}

export const CategoryList = (props: CategoryListProps) => {
    const { className = '', categories, classNameList, classNameItem } = props;

    return (
        <nav className={cn('', className)}>
            <ul className={classNameList}>
                {categories.map((category) => {
                    return (
                        <li
                            key={`Category ${category.id}`}
                            className={cn('', classNameItem)}
                        >
                            <Link target='_blank' href={'#'}>   
                                {category.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
