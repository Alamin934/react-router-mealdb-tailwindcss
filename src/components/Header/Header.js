import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex justify-center gap-4 mb-8">
            <div>
                <NavLink
                    activeStyle={{
                        backgroundColor: "white",
                        color: "rgb(185, 28, 28)",
                        borderColor: "rgb(185, 28, 28)"
                    }}
                    className="bg-red-700 px-4 py-2 text-white font-semibold rounded border cursor-pointer duration-300  hover:bg-white hover:border hover:border-red-700 hover:text-red-700" to="/home"
                >Home</NavLink>
            </div>
            <div>
                <NavLink
                    activeStyle={{
                        backgroundColor: "white",
                        color: "rgb(185, 28, 28)",
                        borderColor: "rgb(185, 28, 28)"
                    }}
                    className="bg-red-700 px-4 py-2 text-white font-semibold rounded border cursor-pointer duration-300  hover:bg-white hover:border hover:border-red-700 hover:text-red-700" to="/resturent"
                >Resturent</NavLink>
            </div>
        </div>
    );
};

export default Header;