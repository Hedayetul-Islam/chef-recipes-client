import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    return (
        <div>
            <div className=' grid grid-cols-2 mt-10 gap-8 items-center'>
                <div>
                    <h1 className=' font-bold text-4xl text-center'>We Care About <br />Taste of Food</h1>
                    <p className=' font-sans text-center p-6'>Taste is a subjective experience that can vary greatly from person to person. It is the sensation that is perceived by the taste buds on the tongue when we eat food. Taste is influenced by a variety of factors such as the texture, aroma, temperature, and appearance of food, as well as our personal preferences and cultural background. The five basic tastes that are commonly recognized are sweet, salty, sour, bitter, and umami. However, taste is not just limited to these basic flavors, and we can also experience complex taste sensations that involve multiple flavors and textures. Overall, taste is an important aspect of our enjoyment of food and can greatly influence our food choices and eating habits.</p>
                </div>
                <div>
                    <img className=' p-6' src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>
            <div className=' grid grid-cols-3 mt-6 ml-24'>
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
                                        <Link to="/recipes"><button className="btn btn-primary">View Recipes</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;