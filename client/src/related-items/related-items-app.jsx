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
import React from 'react';
import { useEffect, useState } from 'react';
import Item from './Item.jsx';
import axios from 'axios';
import RelatedCSS from './cssModules/Related.module.css';
//import arrows from './cssModules/arrows';

const AppRelated = (props) => {
  //const [state, setState] = useState(initialState);
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true); //set true for loader to appear
  const productId = props.product_id || 63624;

  useEffect(() => {
    getAllRelatedItems();
  }, []);

  useEffect(() => {
    getAllRelatedItems();
  }, [props.product_id]);

  const getAllRelatedItems = () => {
    axios.get('/products/related', { params: { product_id: productId } })
      .then((res) => {
        var relatedItemsArray = res.data;
        getEachItem(relatedItemsArray);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getEachItem = (itemsArr) => {
    let promises = [];
    var storeAllItems = []
    for (var i = 0; i < itemsArr.length; i++) {
      promises.push(axios.get('/products/get', { params: { product_id: itemsArr[i] } })
        .then((res) => {
          // console.log();
          var eachItem = res.data;
          storeAllItems.push(eachItem);
        })
        .catch((err) => {
          console.log(err);
        })
      )
    }
    Promise.all(promises).then(() => {
      setItems(storeAllItems);
      setLoading(false);
    });

  }

  if (isLoading) {
    return (
      <div className={RelatedCSS.container}>
        <h3>FETCHING RELATED ITEMS</h3>
        <div className={RelatedCSS.loader_container}>
          <div className={RelatedCSS.loader}></div>
        </div>
      </div>
    )
  }

  //on click on the image need to scroll to item at 4th index (item # 5)
  const scrollRightCarousel = () => {
    //console.log('scrolling right');
    document.querySelector('#carousel').scrollLeft += 200;
  };

  const scrollLeftCarousel = () => {
    //console.log('scrolling left');
    document.querySelector('#carousel').scrollLeft += -200;
  };


  return (
    <div className = {RelatedCSS.outer}>
      <h3 className = {RelatedCSS.title}>Related Products</h3>
    <div className={RelatedCSS.app}>
      <img className={RelatedCSS.arrowLeft} onClick={scrollLeftCarousel} src= "https://img.icons8.com/ios/50/ffffff/circled-chevron-left.png" />
      <div id = 'carousel' className={RelatedCSS.container}>
        {items.map((item) => {
          return (
            <Item
              name={item.name}
              category={item.category}
              price={item.default_price}
              key={item.id}
              id={item.id}
              parentId={props.product_id}
              id={item.id}
              setProduct={props.setProduct}
            />
          )
        }
        )
        }
      </div>
      <img className={RelatedCSS.arrowRight} onClick={scrollRightCarousel} src = "https://img.icons8.com/ios/50/ffffff/circled-chevron-right.png"/>
    </div>
    </div>
  )
}

export default AppRelated;

