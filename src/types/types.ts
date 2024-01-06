import {IconProp} from "@fortawesome/fontawesome-svg-core";

export type MenuItem = {
    label?: string;
    icon?: IconProp;
    onHoverBackgroundColor: string;
    backgroundColor: string;
    color: string;
    path?: string;
    newTab?: boolean;
};

export type VideoItem = {
    video: string;
}

export type ImageItem = {
    image: string;
}

export type NewsItem = {
    title: string;
    subtitle: string;
}

export type PostItem = {
    title: string;
    type: string;
    date: string;
    text: string;
    thumbnail: string;
}