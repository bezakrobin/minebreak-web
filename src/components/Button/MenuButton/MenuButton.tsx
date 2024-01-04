import React, {useState} from 'react';
import { Link } from 'react-router-dom';

type MenuButtonProps = {
    label: string;
    onHoverBackgroundColor: string;
    backgroundColor: string;
    color: string;
    path: string;
};

export const MenuButton: React.FC<MenuButtonProps> = ({ label, onHoverBackgroundColor, backgroundColor, color, path }) => {
    const [isHovered, setIsHovered] = useState(false);
    const buttonStyle: React.CSSProperties = {
        backgroundColor: isHovered ? onHoverBackgroundColor : backgroundColor,
        color,
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        margin: '0 5px',
        cursor: 'pointer',
        fontSize: '1em',
        fontWeight: 'bold',
        textDecoration: 'none',
        display: 'inline-block',
    };

    return (
        <Link
            to={path}
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {label}
        </Link>
    );
};
