import {ImageItem, MenuItem, NewsItem, PostItem, VideoItem} from "../types/types";
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import videoSrc from "../video/background.mp4";
import fallbackImageSrc from "../images/minebreak_logo_PNG_1642x1113px.png";
import postThumbnail from "../images/postThumbnail.jpg";

export const menuItems: MenuItem[] = [
    { label: 'HOME', onHoverBackgroundColor: '#B43131', backgroundColor: 'transparent', color: '#fff', path: '/' },
    { label: 'BLOG', onHoverBackgroundColor: '#B43131', backgroundColor: 'transparent', color: '#fff', path: '/blog' },
    { label: 'GUIDES', onHoverBackgroundColor: '#B43131', backgroundColor: 'transparent', color: '#fff', path: '/guides' },
    { label: 'STORE', onHoverBackgroundColor: '#B43131', backgroundColor: 'transparent', color: '#fff', path: '/store' },
    { label: 'RECRUITMENT', onHoverBackgroundColor: '#B43131', backgroundColor: 'transparent', color: '#fff', path: '/recruitment' },
];

export const menuItemDiscord: MenuItem = {
    icon: faDiscord,
    onHoverBackgroundColor: '#6773F4',
    backgroundColor: '#7289DA',
    color: '#fff',
    path: 'https://discord.com/invite/pPQZ3vZ',
    newTab: true,
}

export const menuItemServerLink: MenuItem = {
    label: 'PLAY.MINEBREAK.CZ',
    onHoverBackgroundColor: '#B43131',
    backgroundColor: '#902325',
    color: '#fff',
    path: 'play.minebreak.cz',
}

export const heroVideo: VideoItem = {
    video: videoSrc,
}

export const heroImage: ImageItem = {
    image: fallbackImageSrc,
}

export const recentPostHeadline: NewsItem = {
    title: 'MineBreak News',
    subtitle: 'Stay up to date with the latest blogs & updates!',
}

export const recentPost: PostItem = {
    title: 'Three Years With Origin Realms',
    type: 'Update',
    date: 'Jan 4th, 2024',
    text: 'It\'s hard to believe, but we\'ve just completed our third year at Origin Realms!\n' +
          'This journey, filled with many challenges and wins, has been incredible thanks to\n' +
          'our amazing community. The Origin Realms players are truly what makes this the\n' +
          'best Minecraft server available and we thank you for being ...',
    thumbnail: postThumbnail,
}