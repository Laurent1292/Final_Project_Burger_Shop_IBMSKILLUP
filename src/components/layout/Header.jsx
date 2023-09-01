import React from "react";
import { IoFastFoodOutline } from "react-icons/io5"; 
import { Link } from "react-router-dom";
import { FiShoppingCart, } from "react-icons/fi";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import DropdownMenu from './DropdownMenu';

const Header = ({isAuthenticated = false}) => {
    const bugers = useSelector((state) => state.burgerReducer.burgers);
    const cartCount = bugers.length;

    return (
        <nav>
            <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
                <IoFastFoodOutline />
            </motion.div>
            <div>
                <Link to="/">Accueil</Link>
                <Link to="/Menu">Menus</Link>
                <Link to="/about">A propos</Link>
                <Link to="/contact">Nous contacter</Link>
                <Link to="/login">Se Connecter</Link>
                <DropdownMenu />
                <Link to="/cart">
                 <FiShoppingCart />
                 <span class="badge badge-pill badge-success">
                    {cartCount}
                 </span>
                </Link>
            </div>
        </nav>
    );
};

export default Header;
