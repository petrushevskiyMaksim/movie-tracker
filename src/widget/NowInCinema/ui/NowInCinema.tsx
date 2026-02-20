import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { Title } from '@/src/shared/Typography/Title/Title';
import BurgerIcon from '@/public/burger.svg';
import { FilmCard } from '@/src/entities/film';

interface NowInCinemaProps {
    className?: string;
}

export const NowInCinema = (props: NowInCinemaProps) => {
    const { className = '' } = props;

    return (
        <section className={cn('mt-9', className)}>
            <div className='flex justify-center gap-2.5 mb-5'>
                {/* заголовок  */}
                <Title level={2}>Сейчас в кино</Title>
                {/* кнопка для меню с жанрами */}
                <Button variant={'ghost'} className='cursor-pointer'>
                    <BurgerIcon />
                </Button>
            </div>

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
