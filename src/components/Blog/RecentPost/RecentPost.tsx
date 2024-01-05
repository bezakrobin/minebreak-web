import React from "react";
import {NewsItem} from "../../../types/types";

type RecentPostProps = {
    recentPostHeadline: NewsItem;
}

export const RecentPost: React.FC<RecentPostProps> = ({recentPostHeadline}) => {
    const containerStyle: React.CSSProperties = {
        backgroundColor: 'transparent',
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
        marginTop: '-200px',
    };

    const titleStyle: React.CSSProperties = {
        fontWeight: 'bold',
        fontSize: '24px',
        marginBottom: '10px',
    };

    const subtitleStyle: React.CSSProperties = {
        fontSize: '16px',
    };

    return (
        <div style={containerStyle}>
            <div style={titleStyle}>{recentPostHeadline.title}</div>
            <div style={subtitleStyle}>{recentPostHeadline.subtitle}</div>
        </div>
    );
};