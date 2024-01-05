import React from "react";
import { Menu } from "../../components/Menu/Menu";
import {menuItems, menuItemDiscord, menuItemServerLink, heroVideo} from "../../data/data"
import {Hero} from "../../components/Hero/Hero";
import {Spacing} from "../../components/Spacing/Spacing";
export const Home = () => {
    return (
        <>
            <Menu menuItems={menuItems} menuItemDiscord={menuItemDiscord} menuItemServerLink={menuItemServerLink} />
            <Spacing direction={'vertical'} spacing={20} />
            <Hero video={heroVideo}/>
        </>
    );
}