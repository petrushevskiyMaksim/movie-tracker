import { ReactNode } from 'react';

interface TypographyPProps {
    className?: string;
    children: ReactNode;
}

export function Text(props: TypographyPProps) {
    const { children, className = '' } = props;
    return <p className={className}>{children}</p>;
}
