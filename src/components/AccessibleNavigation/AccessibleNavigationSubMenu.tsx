import React from 'react';

interface AccessibleNavigationSubMenuProps {
    children?: JSX.Element[] | JSX.Element
}

const AccessibleNavigationSubMenu = ({ children }: AccessibleNavigationSubMenuProps): JSX.Element => {
    return (
        <div className="main-navigation__submenu">
            { children }
        </div>
    );
}

export default AccessibleNavigationSubMenu;
