import React from 'react';
import Header from '../../pages/Shared/Header/Header';
import Footer from '../../pages/Shared/Footer/Footer';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';

const MainLayout = () => {
    return (
        <>
            <Header />
            <Banner />
                <Container>
                    <Outlet />
                </Container>
            <Footer />
        </>
    );
};

export default MainLayout;