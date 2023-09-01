import React from "react";
// import { motion } from "framer-motion";
import Modal from "../Modal/Modal";

const MenuCard = ({ item }) => {
  const { useRef, title, price, burgerSrc } = item;
  return (
    <div className="col-sm-4">
      <div className="card">
        <div className="menuCard col-sm-12"></div>
        <img src={burgerSrc} alt={title}/>
        <div className="card-body col-sm-12">
          <div className="row">
            <div className="text-center">
              <h5>€{price}</h5>
              <p> {title} </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <button className="btn btn-sm btn-red" data-bs-toggle="modal" data-bs-target={`#${useRef}`}>Acheter</button>
            </div>
          </div>
        </div>
      </div>
      <Modal item={item}/>
    </div>
  );
};

export default MenuCard;
