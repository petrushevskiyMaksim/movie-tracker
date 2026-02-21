import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { Title } from '@/src/shared/Typography/Title/Title';
import BurgerIcon from '@/public/burger.svg';
import { FilmCard } from '@/src/entities/film';
import { Category, CategoryList } from '@/src/features/CategoryList';

interface NowInCinemaProps {
    className?: string;
}

const categories: Category[] = [
    {
        id: 1,
        name: 'Все',
    },
    {
        id: 2,
        name: 'Боевики',
    },
    {
        id: 3,
        name: 'Приключения',
    },
    {
        id: 4,
        name: 'Комедии',
    },
    {
        id: 5,
        name: 'Фантастика',
    },
    {
        id: 6,
        name: 'Триллеры',
    },
    {
        id: 7,
        name: 'Драма',
    },
];

export const NowInCinema = (props: NowInCinemaProps) => {
    const { className = '' } = props;

    return (
        <section className={cn('mt-9', className)}>
            <div className='flex justify-center md:justify-normal gap-2.5 mb-5 md:mb-0'>
                {/* заголовок  */}
                <Title level={2} className='md:mb-1.5 md:leading-[1.5]'>
                    Сейчас в кино
                </Title>
                {/* кнопка для меню с жанрами */}
                <Button variant={'ghost'} className='cursor-pointer md:hidden'>
                    <BurgerIcon />
                </Button>
                {/* список жанров */}
            </div>
            <CategoryList
                categories={categories}
                className='hidden md:block md:mb-7'
                classNameList={
                    'flex flex-wrap gap-x-6 gap-y-3 text-[15px] tracking-normal font-bold'
                }
            />

            <div className='grid grid-cols-2 xs:grid-cols-3 lg:grid-cols-4 gap-x-3 2xl:gap-x-6 gap-y-5 2xl:gap-y-6'>
                {/* список фильмов */}
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
            </div>

            {/* кнопка показать все */}
        </section>
    );
};
