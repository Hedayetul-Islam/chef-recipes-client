import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://assignment10-server-4bckr1ju5-hedayetul-islam.vercel.app/data')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    return (
        <div>
            <div className=' grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-10 gap-8 items-center'>
                <div>
                    <h1 className=' font-bold text-4xl text-center'>We Care About <br />Taste of Food</h1>
                    <p className=' font-sans text-center p-6'>Taste is a subjective experience that can vary greatly from person to person. It is the sensation that is perceived by the taste buds on the tongue when we eat food. Taste is influenced by a variety of factors such as the texture, aroma, temperature, and appearance of food, as well as our personal preferences and cultural background. The five basic tastes that are commonly recognized are sweet, salty, sour, bitter, and umami. However, taste is not just limited to these basic flavors, and we can also experience complex taste sensations that involve multiple flavors and textures. Overall, taste is an important aspect of our enjoyment of food and can greatly influence our food choices and eating habits.</p>
                </div>
                <div>
                    <img className=' p-6' src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 ml-24'>
                {
                    chefs.map(chef => <div
                        key={chef.id}
                    >
                        <div>
                            <div className="card w-96 bg-base-100 shadow-xl mt-4">
                                <figure className="px-10 pt-10">
                                    <img src={chef.chefPicture} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{chef.chefName}</h2>
                                    <p>Years of experience: {chef.yearsExperience}</p>
                                    <p>Numbers of recipes: {chef.numRecipes}</p>
                                    <p>Likes: {chef.likes}</p>
                                    <div className="card-actions">
                                        <Link to={`/recipes/${chef.id}`}><button className="btn btn-primary">View Recipes</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>
            <div className=' text-center mt-12 bg-red-300'>
                <h1 className=' font-bold text-6xl text-blue-500 pt-4'>About Ourself</h1>
                <p className=' p-10'>A chef is a professional cook who specializes in preparing and creating dishes in a variety of styles and cuisines. Their expertise extends beyond simply cooking food, as they also have knowledge of food science, nutrition, and flavor profiles. Chefs are responsible for developing menus, selecting ingredients, managing a kitchen team, and ensuring that the food is prepared to the highest standards. Food is an essential part of human life and culture, and chefs play an important role in shaping culinary traditions and creating memorable dining experiences. The art of cooking is a constantly evolving field, with chefs always experimenting and innovating to create new and exciting dishes.</p>
            </div>
            <div className=' mt-12 mb-6'>
                <h1 className=' font-bold text-center text-6xl text-yellow-400'>Our Best Chef</h1>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Chef John Smith</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://images.pexels.com/photos/4253703/pexels-photo-4253703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Chef Maria Rodriguez</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://images.pexels.com/photos/4252150/pexels-photo-4252150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Chef Maria</h2>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Home;