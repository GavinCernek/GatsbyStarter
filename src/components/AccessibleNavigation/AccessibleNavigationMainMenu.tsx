import React from 'react';

interface AccessibleNavigationMainMenuProps {
    children?: JSX.Element[] | JSX.Element
}

const AccessibleNavigationMainMenu = ({ children }: AccessibleNavigationMainMenuProps): JSX.Element => {
    return (
        <div className="main-navigation__menu">
            { children }
        </div>
    );
}

export default AccessibleNavigationMainMenu;
