import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chefs from '../../components/Chefs/Chefs';

const Home = () => {
    const chefs = useLoaderData()

    return (
        <div>
            <Chefs chefs = {chefs} />
        </div>
    );
};

export default Home;