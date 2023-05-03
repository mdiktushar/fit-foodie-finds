import React from 'react';
import Recipe from './Recipe/Recipe';

const Recipes = ({recipes}) => {
    return (
        <div className='mt-5'>
            <h2 className='display-5'>Recipes</h2>
            <hr />
            {
                recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)
            }
        </div>
    );
};

export default Recipes;