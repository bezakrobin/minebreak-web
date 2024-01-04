import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type MenuButtonProps = {
    label?: string;
    icon?: IconProp;
    onHoverBackgroundColor: string;
    backgroundColor: string;
    color: string;
    path?: string;
    newTab?: boolean;
    onClick?: (path: string) => void;
};

export const MenuButton: React.FC<MenuButtonProps> = ({ label, onHoverBackgroundColor, backgroundColor, color, path, icon, newTab, onClick }) => {
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

    const target = newTab ? "_blank" : undefined;
    const rel = newTab ? "noopener noreferrer" : undefined;

    const handleClick = () => {
        if (onClick) {
            onClick(path!!);
        }
    };

    return (
        <a
            href={path}
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            target={target}
            rel={rel}
            onClick={handleClick}
        >
            {icon && (
                <FontAwesomeIcon icon={icon} />
            )}
            {label && (
                label
            )}
        </a>
    );
};
