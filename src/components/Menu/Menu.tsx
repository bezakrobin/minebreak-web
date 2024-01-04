import React from 'react';
import { MenuButton } from '../Button/MenuButton/MenuButton';
import { MenuItem } from "../../types/types";
import { useLocation } from 'react-router-dom';
import {Spacing} from "../Spacing/Spacing";
import { useCopyServerLink } from '../../functions/useCopyServerLink';

type MenuProps = {
    menuItems: MenuItem[];
    menuItemDiscord: MenuItem;
    menuItemServerLink: MenuItem;
}

export const Menu: React.FC<MenuProps> = ({ menuItems, menuItemDiscord, menuItemServerLink }) => {
    const location = useLocation();
    const copyServerLink = useCopyServerLink();
    const menuStyle: React.CSSProperties = {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '20px',
    };

    const menuButtonsStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div style={menuStyle}>
            <div style={menuButtonsStyle}>
                {menuItems.map((item, index) => {
                    const backgroundColor = location.pathname === item.path ? '#B43131' : item.backgroundColor;
                    return (
                        <MenuButton
                            key={index}
                            label={item.label}
                            icon={item.icon}
                            onHoverBackgroundColor={item.onHoverBackgroundColor}
                            backgroundColor={backgroundColor}
                            color={item.color}
                            path={item.path}
                        />
                    );
                })}
                <Spacing direction={'horizontal'} spacing={150} />
                {menuItemDiscord && (
                    <MenuButton
                        label={menuItemDiscord.label}
                        icon={menuItemDiscord.icon}
                        onHoverBackgroundColor={menuItemDiscord.onHoverBackgroundColor}
                        backgroundColor={menuItemDiscord.backgroundColor}
                        color={menuItemDiscord.color}
                        path={menuItemDiscord.path}
                        newTab={menuItemDiscord.newTab}
                    />
                )}
                {menuItemServerLink && (
                    <MenuButton
                        label={menuItemServerLink.label}
                        onHoverBackgroundColor={menuItemServerLink.onHoverBackgroundColor}
                        backgroundColor={menuItemServerLink.backgroundColor}
                        color={menuItemServerLink.color}
                        onClick={() => copyServerLink(menuItemServerLink.path)}
                    />
                )}
            </div>
        </div>
    );
}
