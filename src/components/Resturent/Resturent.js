import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';

const Resturent = () => {

    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);


    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [search]);

    const handleSearchText = (e) => {
        const searchText = e.target.value;
        setSearch(searchText);
    }
    return (
        <div>
            <h2 className="text-4xl font-bold">This is Resturent Page</h2>
            <div>
                <input
                    type="text"
                    onChange={handleSearchText}
                    placeholder="Search by meal name..."
                    className="border border-gary-700 w-2/4 p-2 rounded-sm mt-4  focus:outline-none focus:border-red-700"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 px-5">
                {
                    meals?.map(meal => <Meals
                        key={meal.idMeal}
                        meal={meal}
                    ></Meals>)
                }
            </div>
        </div>
    );
};

export default Resturent;