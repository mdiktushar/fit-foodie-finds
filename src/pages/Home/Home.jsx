import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const chefs = useLoaderData()
    console.log(chefs);
    return (
        <div>
            home
        </div>
    );
};

export default Home;