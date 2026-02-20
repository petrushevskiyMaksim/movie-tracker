import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { Title } from '@/src/shared/Typography/Title/Title';
import BurgerIcon from '@/public/burger.svg';

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

            <div>{/* список фильмов */}</div>

            {/* кнопка показать все */}
        </section>
    );
};
