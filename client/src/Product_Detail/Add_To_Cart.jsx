import React, { useState } from 'react';
import css from './productdetail.module.css';
import axios from 'axios';

const AddToCart = (props) => {
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState(false);

  const handleSizeSelector = (event) => {
    if (event.target.value !== 'Select Size') {
      setSize(event.target.value);
    }
  }

  const handleQuantitySelector = (event) => {
    setQuantity(event.target.value);
  }

  const handleAddToCart = () => {
    for (let sku in props.currentStyle.skus) {
      let currentSku = props.currentStyle.skus[sku]
      if (currentSku.size === size && currentSku.quantity >= quantity) {
        axios.post('/cart', {
          sku_id: sku,
          size: size,
          quantity: quantity
        })
        .then((response) => {
          setCart(true);
        })
        .catch((error) => {
          console.log(error);
        })
      }
    }
  }

  return (
    <div className={css.addToCart}>
      <div className={css.selectors}>
        <select
          name="size-selector"
          onChange={handleSizeSelector}
        >
          <option>Select Size</option>
          <option value="XS">Size: XS</option>
          <option value="S">Size: S</option>
          <option value="M">Size: M</option>
          <option value="L">Size: L</option>
          <option value="XL">Size: XL</option>
          <option value="XXL">Size: XXL</option>
        </select>
        <input
          className={css.quantitySelector}
          type="number"
          name="quantity-selector"
          min="1"
          defaultValue="1"
          onChange={handleQuantitySelector}
        ></input>
      </div>
      <div className={css.cartWrapper}>
        <button
          className={css.cartButton}
          onClick={handleAddToCart}
        >Add to Cart</button>
        {cart ? <div>Added to Cart!</div> : <div></div>}
      </div>
    </div>
  );
};

export default AddToCart;