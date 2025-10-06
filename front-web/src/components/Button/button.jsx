import React, { Children } from 'react';
import styles from './button.module.css'

const Button = ({
    children,
    width,
    height,
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
        color: textColor || '#F9F9F9',
        border: borderColor ? `6px solid ${borderColor}` : 'none',
        padding: padding || '1.5rem',

        cursor: 'pointer',
        borderRadius: '50px',
        textDecoration: 'none',
        textAlign: 'center',
        transition: 'all 0.3s ease',

        display: 'inline-block',
        fontSize: fontSize || '1rem'
    };

        const classNames = `${styles.buttonBase} ${anotherProps.className || ''}` 

    if (href) {
        return (
            <a href={href}
                className={classNames}
                style={buttonStyle}
                {...anotherProps}
            >
                {children}
            </a>
        )
    }

    return (
        <button
            className={classNames}
            style={buttonStyle}
            {...anotherProps}>
            {children}
        </button>
    )
}

export default Button;