import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex justify-center gap-4 mb-8">
            <div>
                <Link className="bg-red-700 px-4 py-2 text-white font-semibold rounded border cursor-pointer duration-300  hover:bg-white hover:border hover:border-red-700 hover:text-red-700" to="/home">Home</Link>
            </div>
            <div>
                <Link className="bg-red-700 px-4 py-2 text-white font-semibold rounded border cursor-pointer duration-300  hover:bg-white hover:border hover:border-red-700 hover:text-red-700" to="/resturent">Resturent</Link>
            </div>
        </div>
    );
};

export default Header;