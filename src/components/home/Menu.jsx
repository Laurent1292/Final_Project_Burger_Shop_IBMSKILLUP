import React from "react";
import MenuCard from "./MenuCard";
import { burgers } from "./menu.contant";

const Menu = () => {
    return (
        <div className="container menu">
            <h1>MENU</h1>
            <div className="row">
                {burgers.map((item, index) => (<MenuCard item={item} key={index}/>))}
            </div> 
        </div>
    );
};

export default Menu;
