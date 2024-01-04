import React from "react";
import { Menu } from "../../components/Menu/Menu";
import { menuItems } from "../../data/data"

export const Store = () => {
    return (
        <>
            <Menu menuItems={menuItems} />
        </>
    );
}