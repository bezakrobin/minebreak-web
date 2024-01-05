import React, { useEffect, useRef, useState } from "react";
import { ImageItem, VideoItem } from "../../types/types";
import { gsap } from "gsap";

type HeroProps = {
    video: VideoItem;
    image: ImageItem;
}

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

const vignetteStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(ellipse at center, transparent 10%, black 80%)',
    zIndex: 1,
};

export const Hero: React.FC<HeroProps> = ({video, image}) => {
    const [videoError, setVideoError] = useState(false);
    const [videoContainerTopOffset, setVideoContainerTopOffset] = useState('-200px');
    const videoRef = useRef<HTMLVideoElement>(null);

    const videoContainerStyle: React.CSSProperties = {
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        zIndex: '-1',
        top: videoContainerTopOffset,
    };

    const handleVideoError = () => {
        setVideoError(true);
    };

    useEffect(() => {
        const videoElement = videoRef.current;
        let fadeOutAnimation: any = null;

        const checkTimeAndAnimate = () => {
            if (videoElement && videoElement.currentTime >= 12 && !fadeOutAnimation) {
                fadeOutAnimation = gsap.to(videoElement, {
                    opacity: 0,
                    duration: 5,
                    onComplete: () => {
                        setVideoError(true);
                        setVideoContainerTopOffset('-50px');
                    }
                });
            }
        };

        const interval = setInterval(checkTimeAndAnimate, 500);

        return () => {
            clearInterval(interval);
            if (fadeOutAnimation) {
                fadeOutAnimation.kill();
            }
        };
    }, []);

    return (
        <div style={videoContainerStyle}>
            {!videoError ? (
                <video ref={videoRef} autoPlay muted playsInline style={videoStyle} onError={handleVideoError}>
                    <source src={video.video} type="video/mp4" />
                </video>
            ) : (
                <img src={image.image} style={videoStyle} alt="Fallback" />
            )}
            <div style={vignetteStyle} />
        </div>
    );
}