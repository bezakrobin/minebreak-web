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