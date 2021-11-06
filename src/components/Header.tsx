import React from 'react';
import AccessibleNavigation from './AccessibleNavigation/AccessibleNavigation';

const Header = (): JSX.Element => {
    return (
        <header className="site-header">
            Header
            <AccessibleNavigation />
        </header>
    );
}

export default Header;
