import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecipes = () => {
    const recipes = useLoaderData();
    const { chefName, chefPicture, bio, likes, numRecipes, yearsExperience } = recipes;

    return (
        <div className="card w-2/3 bg-base-100 shadow-xl mx-auto mt-12">
            <figure><img src={recipes.chefPicture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {recipes.chefName}
                    <div className="badge badge-secondary">Experience: {recipes.yearsExperience} Years</div>
                </h2>
                <p>{recipes.bio}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Likes: {recipes.likes}</div>
                    <div className="badge badge-outline">Recipes: {recipes.numRecipes}</div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecipes;