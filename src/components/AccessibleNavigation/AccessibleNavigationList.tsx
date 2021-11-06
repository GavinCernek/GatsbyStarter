import React from 'react';

interface AccessibleNavigationListProps {
    children?: JSX.Element[] | JSX.Element
}

const AccessibleNavigationList = ({ children }: AccessibleNavigationListProps): JSX.Element => {
    return (
        <ul className="main-navigation__list">
            { children }
        </ul>
    );
}

export default AccessibleNavigationList;
