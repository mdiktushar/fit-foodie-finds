import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chefs from '../../components/Chefs/Chefs';
import MostPopularRecipes from '../../components/MostPopularRecipes/MostPopularRecipes';
import Welcome from '../../components/Welcome/Welcome';

const Home = () => {
    const chefs = useLoaderData()

    return (
        <div>
            <Welcome />
            <Chefs chefs = {chefs} />
            <MostPopularRecipes />
        </div>
    );
};

export default Home;