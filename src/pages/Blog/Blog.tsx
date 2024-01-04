import React from "react";
import { Menu } from "../../components/Menu/Menu";
import {menuItemDiscord, menuItems, menuItemServerLink} from "../../data/data"

export const Blog = () => {
    return (
        <>
            <Menu menuItems={menuItems} menuItemDiscord={menuItemDiscord} menuItemServerLink={menuItemServerLink} />
        </>
    );
}