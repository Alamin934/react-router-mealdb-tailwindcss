import React from 'react';
import { Link } from 'react-router-dom';

const Meals = (props) => {
    const { idMeal, strMeal, strInstructions, strMealThumb } = props.meal;
    return (
        <div>
            <div className="border rounded">
                <img className="rounded" src={strMealThumb} alt="" />
                <div className="p-4 text-left">
                    <h2 className="text-2xl font-semibold mb-1">{strMeal}</h2>
                    <p className="mb-5">{strInstructions.slice(0, 200)}</p>
                    <Link
                        to={`/meals/${idMeal}`}
                        className="bg-red-700 px-4 py-2 text-white font-semibold rounded border cursor-pointer duration-300  hover:bg-white hover:border hover:border-red-700 hover:text-red-700"
                    >See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Meals;