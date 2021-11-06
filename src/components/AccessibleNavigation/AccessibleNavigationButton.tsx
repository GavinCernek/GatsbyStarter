import React from 'react';

interface AccessibleNavigationButtonProps {
    text: string,
    className?: string,
    children?: JSX.Element[] | JSX.Element
}

const AccessibleNavigationButton = ({ text, className, children }: AccessibleNavigationButtonProps): JSX.Element => {
    return (
        <li className="main-navigation__item">
            <button className={ className ? "main-navigation__button" + className : "main-navigation__button" }>
                { text }
            </button>
            { children ? children : null }
        </li>
    );
}

export default AccessibleNavigationButton;
