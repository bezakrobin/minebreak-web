import React from "react";
import { Menu } from "../../components/Menu/Menu";
import {menuItems, menuItemDiscord, menuItemServerLink, heroVideo, heroImage} from "../../data/data"
import {Hero} from "../../components/Hero/Hero";
import {Spacing} from "../../components/Spacing/Spacing";
import {RecentPost} from "../../components/Blog/RecentPost/RecentPost";
export const Home = () => {
    return (
        <>
            <Menu menuItems={menuItems} menuItemDiscord={menuItemDiscord} menuItemServerLink={menuItemServerLink} />
            <Spacing direction={'vertical'} spacing={20} />
            <Hero video={heroVideo} image={heroImage}/>
            <RecentPost />
        </>
    );
}