import React from 'react';
import AccessibleNavigationMainMenu from './AccessibleNavigationMainMenu';
import AccessibleNavigationSubMenu from './AccessibleNavigationSubMenu';
import AccessibleNavigationList from './AccessibleNavigationList';
import AccessibleNavigationButton from './AccessibleNavigationButton';
import AccessibleNavigationLink from './AccessibleNavigationLink';

const AccessibleNavigation = (): JSX.Element => {
    return (
        <nav className="main-navigation">
            <AccessibleNavigationMainMenu>
                <AccessibleNavigationList>
                    <AccessibleNavigationButton text="Men">
                        <AccessibleNavigationSubMenu>
                            <AccessibleNavigationList>
                                <AccessibleNavigationLink text="Shorts" path="/shorts" />
                                <AccessibleNavigationButton text="Jackets">
                                    <AccessibleNavigationSubMenu>
                                        <AccessibleNavigationList>
                                            <AccessibleNavigationLink text="Goose" path="/jackets/goose" />
                                        </AccessibleNavigationList>
                                    </AccessibleNavigationSubMenu>
                                </AccessibleNavigationButton>
                            </AccessibleNavigationList>
                        </AccessibleNavigationSubMenu>
                    </AccessibleNavigationButton>
                    <AccessibleNavigationLink text="Home" path="/" />
                    <AccessibleNavigationLink text="Contact" path="/contact" />
                    <AccessibleNavigationLink text="Gallery" path="/gallery" />
                </AccessibleNavigationList>
            </AccessibleNavigationMainMenu>
        </nav>
    );
}

export default AccessibleNavigation;
