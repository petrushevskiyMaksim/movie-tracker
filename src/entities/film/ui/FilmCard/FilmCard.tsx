'use client';

import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { Text } from '@/src/shared/Typography/Text';
import { Title } from '@/src/shared/Typography/Title/Title';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Film {
    id: number;
    title: string;
    genre: string[];
    src: string;
}

interface FilmCardProps {
    item?: Film;
    className?: string;
}

export const FilmCard = (props: FilmCardProps) => {
    const { className = '', item } = props;
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Link
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            href={'#'}
            className={cn('flex flex-col gap-1', className)}
        >
            <div className='rounded-md overflow-hidden relative h-60.5 md:h-74.5 2xl:h-115.5'>
                <Image
                    src={'/image/joker.png'}
                    alt='Картинка фильма'
                    fill
                    sizes='242px'
                    className='object-fill'
                    // width={178}
                    // height={242}
                />
                <div className='absolute top-3 right-3.5 text-xs 2xl:text-lg font-bold bg-success rounded-sm px-1.5 py-1'>
                    6.70
                </div>
                {isHovered && (
                    <div className='absolute inset-0 flex justify-center items-center bg-secondary/65 '>
                        <Button className='font-bold text-sm cursor-pointer'>
                            Карточка фильма
                        </Button>
                    </div>
                )}
            </div>
            <Title level={3} className='hover:opacity-80'>
                Побег из Претории
            </Title>
            <Text className='text-accent text-xs'>Триллер</Text>
        </Link>
    );
};
