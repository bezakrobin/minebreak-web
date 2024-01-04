import React from 'react';

type SpacingProps = {
    direction: 'horizontal' | 'vertical';
    spacing: number;
};

export const Spacing: React.FC<SpacingProps> = ({ direction, spacing }) => {
    const style: React.CSSProperties = {
        display: direction === 'horizontal' ? 'inline-block' : 'block',
        width: direction === 'horizontal' ? `${spacing}px` : '100%',
        height: direction === 'vertical' ? `${spacing}px` : 'auto',
    };

    return <span style={style} aria-hidden="true" />;
};
