import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.styles.scss';
import { clearItem, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity, id } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={`${imageUrl}`} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(id)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => clearItem(id)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (id) => dispatch(clearItem(id)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (id) => dispatch(removeItem(id)),
});

export default connect(undefined, mapDispatchToProps)(CheckoutItem);
