import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex justify-center gap-4 mb-8">
            <div>
                <NavLink
                    activeStyle={{
                        backgroundColor: "rgb(185, 28, 28)",
                        color: "white",
                        borderColor: "rgb(185, 28, 28)"
                    }}
                    className="px-4 py-2 text-white font-semibold rounded border cursor-pointer duration-300 hover:border border-red-700 text-red-700" to="/home"
                >Home</NavLink>
            </div>
            <div>
                <NavLink
                    activeStyle={{
                        backgroundColor: "rgb(185, 28, 28)",
                        color: "white",
                        borderColor: "rgb(185, 28, 28)"
                    }}
                    className="px-4 py-2 text-white font-semibold rounded border cursor-pointer duration-300 hover:border border-red-700 text-red-700" to="/resturent"
                >Resturent</NavLink>
            </div>
        </div>
    );
};

export default Header;