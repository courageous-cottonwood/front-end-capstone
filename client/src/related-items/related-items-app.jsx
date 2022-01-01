/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-equals-spacing */
/* eslint-disable import/order */
/* eslint-disable import/extensions */
/* eslint-disable spaced-comment */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
/* eslint-disable semi */
/* eslint-disable react/destructuring-assignment */
import RelatedCSS from './cssModules/Related.module.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Item from './Item.jsx';
import axios from 'axios';

const AppRelated = (props) => {
  //const [state, setState] = useState(initialState);
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true); //set true for loader to appear

  const productId = props.product_id || 63609;

  useEffect(() => {
    axios.get('/products/related', { params: { product_id: productId } })
      .then((res) => {
        //console.log(res.data);
        getEachItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      })

  }, []);

    const getEachItem = (dataArr) => {
    let promises = [];
    var itemsFull = []
    for (var i = 0; i < dataArr.length; i++) {
      promises.push(axios.get('/products/get', { params: { product_id: dataArr[i] } })
        .then((res) => {
          //console.log(res.data);
          itemsFull.push(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
      )
    }
    Promise.all(promises).then(() => {
      setItems(itemsFull);
      setLoading(!isLoading);
    });

  }

  if (isLoading) {
    return (
      <div className={RelatedCSS.container}>
        <h3 className= {RelatedCSS.h3}>FETCHING DATA</h3>
        <div className={RelatedCSS.loader_container}>
          <div className={RelatedCSS.loader}></div>
        </div>
      </div>
    )
  }
  return (
    <div className={RelatedCSS.container}>
      {console.log(items)}
      {items.map((item) => {
        return (
          <Item
            name={item.name}
            category={item.category}
            price={item.default_price}
            key={item.id}
            id = {item.id}
          />
        )
      }
      )
      }
    </div>
  )
}

export default AppRelated;

