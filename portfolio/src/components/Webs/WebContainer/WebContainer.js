import React from 'react';
import "../../styles.css";

export const WebContainer = ({children, ...props}) => {
    return (
        <div className="webBox" {...props}>
            {children}
        </div>
    )
}
