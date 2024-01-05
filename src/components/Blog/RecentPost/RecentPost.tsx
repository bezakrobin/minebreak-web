import React from "react";

export const RecentPost: React.FC = () => {
    const containerStyle: React.CSSProperties = {
        backgroundColor: 'transparent',
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
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
            <div style={titleStyle}>MineBreak News</div>
            <div style={subtitleStyle}>Stay up to date with the latest blogs & updates!</div>
        </div>
    );
};