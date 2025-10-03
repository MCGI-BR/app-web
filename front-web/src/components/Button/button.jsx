import React, { Children } from 'react';
import styles from './button.module.css'

const Button = ({
    children,
    bgColor,
    textColor,
    borderColor,
    fontSize,
    padding,
    href,
    ...anotherProps
}) => {
    const buttonStyle = {
        backgroundColor: bgColor || 'transparent',
        color: textColor || 'var(--cor-branco)',
        border: 'none',
        padding: padding || '1.5rem',

        cursor: 'pointer',
        borderRadius: '8px',
        textDecoration: 'none',
        textAlign: 'center',
        transition: 'all 0.3s ease',
    };

    if (href) {
        return (
            <a href={href}
                style={buttonStyle}
                {...anotherProps}
            >
                {children}
            </a>
        )
    }

    return (
        <button
            style={buttonStyle}
            {...anotherProps}>
            {children}
        </button>
    )
}

export default Button;