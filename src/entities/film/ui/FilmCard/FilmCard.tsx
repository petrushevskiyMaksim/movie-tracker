import { cn } from '@/lib/utils';

interface FilmCardProps {
    className?: string;
}

export const FilmCard = (props: FilmCardProps) => {
const { className = '' } = props;

    return (
        <div className={cn('' , className)}>

        </div>
    );
};