import React from "react";
import { Menu } from "../../components/Menu/Menu";
import {menuItems, menuItemDiscord, menuItemServerLink} from "../../data/data"
export const Home = () => {
    return (
        <>
            <Menu menuItems={menuItems} menuItemDiscord={menuItemDiscord} menuItemServerLink={menuItemServerLink} />
        </>
    );
}