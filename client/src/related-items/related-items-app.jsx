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

//import ReactDOM from 'react-dom';
//client/src/related-items/dummy_data.js
import RelatedCSS from './cssModules/Related.module.css';
import React from 'react';
import { useEffect, useState } from 'react';
import Item from './Item.jsx';
import axios from 'axios';

//helper function to get array of related items
//iterate over the array, get their product info(axios.get), add to a new array

//remove dummy data props
const AppRelated = (props) => {
  //useState --> items, setItems
  //const [state, setState] = useState(initialState);
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true); //set true to appear


  //grab product id from the props or 63630 for now
  const productId = props.product_id || 63609;

  //to load items initally with [] in the end
  useEffect(() => {
    console.log('hello useEffect');
    //1. axios.get(/id/related)
    axios.get('/products/related', { params: { product_id: productId } })
      .then((res) => {
        //console.log(res.data);
        getEachItem(res.data);
        //setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      })

  }, []);

  // useEffect(() => {
  //   return
  // }, [items])

  // useEffect(() => {
  //   fakeRequest().then(() => {
  //     const el = document.querySelector(".loader-container");
  //     if (el) {
  //       el.remove();
  //       setLoading(!isLoading);
  //     }
  //   });
  // }, []);


  const getEachItem = (dataArr) => {
    for (var i = 0; i < dataArr.length; i++) {
      axios.get('/products/get', { params: { product_id: dataArr[i] } })
        .then((res) => {
          //console.log(res.data);
          items.push(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
    }
    console.log(items);
    setLoading(!isLoading);
  }


  // const array = [{ id: 'asdf' }, { id: 'foo' }, { id: 'bar' }];
  // let users = [];
  // let promises = [];
  // for (i = 0; i < array.length; i++) {
  //   promises.push(
  //     axios.get('/user/' + array[i].id).then(response => {
  //       // do something with response
  //       users.push(response);
  //     })
  //   )
  // }

  // Promise.all(promises).then(() => console.log(users));

  if (isLoading) {
    return (
      <div className={RelatedCSS.container}>
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
        console.log(item);
        return (
        <Item
          name={item.name}
          category={item.category}
          price={item.default_price}
          key={item.id}
        />
        )
      }
      )
      }
    </div>
  )
}

export default AppRelated;
