import React from "react";
import { Menu } from "../../components/Menu/Menu";
import {menuItemDiscord, menuItems, menuItemServerLink} from "../../data/data"

export const Guides = () => {
    return (
        <>
            <Menu menuItems={menuItems} menuItemDiscord={menuItemDiscord} menuItemServerLink={menuItemServerLink} />
        </>
    );
}