import { cn } from '@/lib/utils';
import Image from 'next/image';

interface IconProps {
    className?: string;
    alt: string;
    src: string;
    width?: number;
    height?: number;
    bgColor?: string;
    rounded?: number;
}

export const Icon = (props: IconProps) => {
    const { className, alt, src, width, height, bgColor, rounded } = props;

    return (
        <div
            className={cn(
                'flex items-center justify-center',
                width && width,
                height && height,
                bgColor && bgColor,
                rounded && rounded,
                className
            )}
        >
            <Image width={50} height={50} alt={alt} src={src}></Image>
        </div>
    );
};

// 'use client';

// import clsx from 'clsx';
// import { SVGProps } from 'react';

// interface IconProps extends SVGProps<SVGSVGElement> {
//     className?: string;
//     icon: React.FC<React.SVGProps<SVGSVGElement>>;
//     src?: string;
//     width?: number;
//     height?: number;
//     bgColor?: string;
//     rounded?: number;
// }

// export function Icon({icon:Svg,className,...props}: IconProps) {

//     return (
//         <Svg
//             className={clsx(
//                 'select-none fill-current inline-block text-inherit box-content',
//                 className
//             )}
//             focusable='false'
//             aria-hidden
//             {...props}
//         >
            
//         </Svg>
//     );
// }
