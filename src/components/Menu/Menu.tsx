import React from 'react';
import { MenuButton } from '../Button/MenuButton/MenuButton';
import { MenuItem } from "../../types/types";
import { useLocation } from 'react-router-dom';

type MenuProps = {
    menuItems: MenuItem[];
}

export const Menu: React.FC<MenuProps> = ({ menuItems }) => {
    const location = useLocation();
    const menuStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '20px',
    };

    return (
        <div style={menuStyle}>
            {menuItems.map((item, index) => {
                const backgroundColor = location.pathname === item.path ? '#B43131' : 'transparent';
                return (
                    <MenuButton
                        key={index}
                        label={item.label}
                        onHoverBackgroundColor={item.onHoverBackgroundColor}
                        backgroundColor={backgroundColor}
                        color={item.color}
                        path={item.path}
                    />
                );
            })}
        </div>
    );
}
