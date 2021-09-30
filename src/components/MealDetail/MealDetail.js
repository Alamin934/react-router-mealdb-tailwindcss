import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const MealDetail = () => {
    const { mealId } = useParams();
    const [foods, setFoods] = useState([]);
    // console.log(meal);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(res => res.json())
            .then(data => setFoods(data.meals[0]))
    }, [mealId]);
    const history = useHistory()
    const handleSeeAllMeals = () => {
        history.push("/resturent");
    }
    return (
        <div className="grid grid-cols-none w-2/6 mx-auto">
            <div className="border rounded">
                <img className="rounded" src={foods.strMealThumb} alt="" />
                <div className="p-4 text-left">
                    <h2 className="text-2xl font-semibold mb-1">{foods.strMeal}</h2>
                    <p className="mb-5">{foods.strInstructions}</p>
                    {/* <Link
                        to={`/meals/${foods.idMeal}`}
                        className="bg-red-700 px-4 py-2 text-white font-semibold rounded border cursor-pointer duration-300  hover:bg-white hover:border hover:border-red-700 hover:text-red-700"
                    >See Details</Link> */}
                    <button
                        onClick={handleSeeAllMeals}
                        className="bg-red-700 px-4 py-2 text-white font-semibold rounded border cursor-pointer duration-300  hover:bg-white hover:border hover:border-red-700 hover:text-red-700"
                    >See All Meals</button>
                </div>
            </div>
        </div>
    );
};

export default MealDetail;