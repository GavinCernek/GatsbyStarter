import React from 'react';
import { Link } from 'gatsby';

interface AccessibleNavigationLinkProps {
    text: string,
    path: string,
    className?: string
}

const AccessibleNavigationLink = ({ text, path, className }: AccessibleNavigationLinkProps): JSX.Element => {
    return (
        <li className="main-navigation__item">
            <Link to={ path } className={ className ? "main-navigation__link" + className : "main-navigation__link" }>
                { text }
            </Link>
        </li>
    );
}

export default AccessibleNavigationLink;
