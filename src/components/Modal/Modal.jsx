import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBurger } from "../../redux/burgerSlice";

const Modal = ({item}) => {
  const { burgerSrc, price, title, useRef } = item;
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  return (
    <div class="modal fade " id={useRef} data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              {title}
            </h5>
            <button
              type="button"
              class="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" >&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div className="row">
              <div className="col-sm-4">
                <img
                  width="170"
                  height="170"
                  src={burgerSrc}
                  alt="burger"
                />
              </div>

              <div className="col-sm">
                <p class="lead">
                  {title}
                </p>
                <h3 className="price">{price}/unit</h3> <br />
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button type="button" className="btn btn-secondary" onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>
                    -
                  </button>
                  <span className="btn btn-light qty">{qty}</span>
                  <button type="button" className="btn btn-secondary" onClick={() => setQty(qty + 1)}>
                    +
                  </button>
                </div>
                <br />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Fermer
            </button>
            <button type="button" class="btn btn-success" data-bs-dismiss="modal" 
             onClick={ () => { dispatch(addBurger({...item, qty}))}}
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
