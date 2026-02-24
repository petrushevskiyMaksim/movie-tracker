import { cn } from '@/lib/utils';
import { Category } from './Navigation';
import { AppLink } from '@/src/shared/AppLink';

interface NavigationItemProps {
    className?: string;
    item: Category;
}

export const NavigationItem = (props: NavigationItemProps) => {
    const { className = '', item } = props;

    return (
        <li className={cn('', className)}>
            <AppLink
                className={cn(
                    'px-2 py-2 rounded-sm hover:bg-primary-foreground/80'
                )}
                href={item.href}
            >
                {item.name}
            </AppLink>
        </li>
    );
};
