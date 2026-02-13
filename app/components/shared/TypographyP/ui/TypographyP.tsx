import { ReactNode } from 'react';

interface TypographyPProps {
    className?: string;
    children: ReactNode;
}

export function TypographyP(props: TypographyPProps) {
    const { children, className = '' } = props;
    return <p className={className}>{children}</p>;
}
