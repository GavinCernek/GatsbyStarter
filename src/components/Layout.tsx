import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/app.scss';

interface LayoutProps {
    children: JSX.Element[] | JSX.Element
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <>
            <Header />
            <main className="site-main" id="main-content">
                { children }
            </main>
            <Footer />
        </>
    );
}

export default Layout;