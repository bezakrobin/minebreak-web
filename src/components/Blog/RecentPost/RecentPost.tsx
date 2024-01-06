import React, {useState} from "react";
import { NewsItem, PostItem } from "../../../types/types";

type RecentPostProps = {
    recentPostHeadline: NewsItem;
    recentPost: PostItem;
};

export const RecentPost: React.FC<RecentPostProps> = ({ recentPostHeadline, recentPost }) => {
    const [isHovered, setIsHovered] = useState(false);

    const outerContainerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        color: 'white',
        overflow: 'hidden',
        maxWidth: '1000px',
        margin: '20px auto',
        position: 'relative',
        marginTop: '-180px',
    };

    const headerContainerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    };

    const headerStyle: React.CSSProperties = {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: 'transparent',
    };

    const headerSubtitleStyle: React.CSSProperties = {
        color: '#B3B7BC',
    };

    const imageTextStyleContainerStyle: React.CSSProperties = {
        display: 'flex',
        padding: '20px',
        marginTop: '20px',
        cursor: 'pointer',
    };

    const imageHoverStyle: React.CSSProperties = isHovered ? {
        transform: 'scale(0.95)',
        transition: 'transform 0.3s ease',
        zIndex: 2,
    } : {};

    const imageStyle: React.CSSProperties = {
        width: '50%',
        borderRadius: '10px',
        transition: 'transform 0.3s ease',
        ...imageHoverStyle,
    };

    const textStyle: React.CSSProperties = {
        padding: '20px',
        paddingTop: 0,
        flexGrow: 1,
    };

    const contentStyle: React.CSSProperties = {
        fontSize: '18px',
        color: '#B3B7BC',
        lineHeight: '28px',
    };

    const postTitleStyle: React.CSSProperties = {
        fontWeight: 'bold',
        fontSize: '24px',
        marginBottom: '8px',
        color: '#fff',
    };

    const postSubtitleStyle: React.CSSProperties = {
        display: 'flex',
        fontSize: '16px',
        marginBottom: '16px',
        flexDirection: 'row',
    };

    const postTypeStyle: React.CSSProperties = {
        color: '#B43131',
        fontWeight: 'bold',
    };

    const postDateStyle: React.CSSProperties = {
        color: '#858C8E',
    }

    return (
        <div style={outerContainerStyle}>
            <div style={headerContainerStyle}>
                <div style={headerStyle}>
                    <div style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '5px' }}>{recentPostHeadline.title}</div>
                    <div style={{ fontSize: '16px', ...headerSubtitleStyle }}>{recentPostHeadline.subtitle}</div>
                </div>
            </div>
            <div style={imageTextStyleContainerStyle}
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    src={recentPost.thumbnail}
                    alt="Thumbnail for the post"
                    className={isHovered ? "imageHover" : "imageNormal"}
                    style={imageStyle}
                />
                <div style={textStyle}>
                    <div style={postTitleStyle}>
                        {recentPost.title}
                    </div>
                    <div style={postSubtitleStyle}>
                        <div style={postTypeStyle}>{recentPost.type}</div><div style={postDateStyle}>&nbsp;—&nbsp;</div><div style={postDateStyle}>{recentPost.date}</div>
                    </div>
                    <div style={contentStyle}>
                        {recentPost.text}
                    </div>
                </div>
            </div>
        </div>
    );
};
