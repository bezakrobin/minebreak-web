import {MenuItem} from "../types/types";
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

export const menuItems: MenuItem[] = [
    { label: 'HOME', onHoverBackgroundColor: '#B43131', backgroundColor: 'transparent', color: '#fff', path: '/' },
    { label: 'BLOG', onHoverBackgroundColor: '#B43131', backgroundColor: 'transparent', color: '#fff', path: '/blog' },
    { label: 'GUIDES', onHoverBackgroundColor: '#B43131', backgroundColor: 'transparent', color: '#fff', path: '/guides' },
    { label: 'STORE', onHoverBackgroundColor: '#B43131', backgroundColor: 'transparent', color: '#fff', path: '/store' },
];

export const menuItemDiscord: MenuItem = {
    icon: faDiscord, onHoverBackgroundColor: '#6773F4', backgroundColor: '#7289DA', color: '#fff', path: 'https://discord.com/invite/pPQZ3vZ', newTab: true
}

export const menuItemServerLink: MenuItem = {
    label: 'PLAY.MINEBREAK.CZ', onHoverBackgroundColor: '#B43131', backgroundColor: '#902325', color: '#fff', path: 'play.minebreak.cz'
}
