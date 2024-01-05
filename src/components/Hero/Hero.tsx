import React from "react";
import {VideoItem} from "../../types/types";

type HeroProps = {
    video: VideoItem;
}

const videoContainerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
};

const videoStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    minWidth: '100%',
    minHeight: '100%',
    width: 'auto',
    height: 'auto',
    zIndex: -1,
    transform: 'translate(-50%, -50%)',
    objectFit: 'cover',
};

export const Hero: React.FC<HeroProps> = ({video}) => {
    return (
        <div style={videoContainerStyle}>
            <video autoPlay loop muted playsInline style={videoStyle}>
                <source src={video.video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* Other content goes here, if you want to overlay anything on the video */}
        </div>
    );
}