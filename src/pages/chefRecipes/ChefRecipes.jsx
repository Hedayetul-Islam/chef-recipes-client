import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecipes = () => {
    const recipes = useLoaderData();
    const {chefName} = recipes;

    return (
        <div>
            <h3>this is recipes: {recipes.chefName}</h3>

        </div>
    );
};

export default ChefRecipes;