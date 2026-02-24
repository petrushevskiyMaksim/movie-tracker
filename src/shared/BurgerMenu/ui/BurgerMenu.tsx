import { cn } from '@/lib/utils';
import { Category, Navigation } from '@/src/features/Navigation';
import { AppLogo } from '../../AppLogo';
import CloseIcon from '@/public/close.svg';

interface BurgerMenuProps {
    className?: string;
    onClose?: () => void;
}

const categories: Category[] = [
    {
        id: 1,
        name: 'Афиша',
        href: '/affiche',
    },
    {
        id: 2,
        name: 'Медиа',
        href: '/media',
    },
    {
        id: 3,
        name: 'Фильмы',
        href: '/films',
    },
    {
        id: 4,
        name: 'Актёры',
        href: '/actors',
    },
    {
        id: 5,
        name: 'Новости',
        href: '/news',
    },
    {
        id: 6,
        name: 'Подборки',
        href: '/collections',
    },
    {
        id: 7,
        name: 'Категории',
        href: '/categories',
    },
];

export const BurgerMenu = (props: BurgerMenuProps) => {
    const { className = '', onClose } = props;

    const handleCloseBurger = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <div className={cn('', className)}>
            <div className='absolute top-8 right-7 p-2 rounded-sm cursor-pointer hover:bg-primary-foreground'>
                <CloseIcon onClick={handleCloseBurger} className='' />
            </div>
            <AppLogo className='flex items-center mb-6' />
            <Navigation
                className='w-full font-bold'
                classNameList='flex flex-col gap-4'
                classNameItem='  '
                categories={categories}
            ></Navigation>
        </div>
    );
};
