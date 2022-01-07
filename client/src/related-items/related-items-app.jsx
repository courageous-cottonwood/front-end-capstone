import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './Item.jsx';
import RelatedCSS from './cssModules/Related.module.css';
import arrowLeft from './cssModules/arrows/left.png';
import arrowRight from './cssModules/arrows/right.png';

const AppRelated = (props) => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
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


  const scrollRightCarousel = () => {
    document.querySelector('#carousel').scrollLeft += 200;
  };

  const scrollLeftCarousel = () => {
    document.querySelector('#carousel').scrollLeft += -200;
  };

  return (
    <div className={RelatedCSS.outer}>
      <h3 className={RelatedCSS.title}>Related Products</h3>
      <div className={RelatedCSS.app}>
        <img className={RelatedCSS.arrowLeft} onClick={scrollLeftCarousel} src={arrowLeft} />
        <div id='carousel' className={RelatedCSS.container}>
          {items.map((item) => {
            return (
              <Item
                name={item.name}
                category={item.category}
                price={item.default_price}
                key={item.id}
                id={item.id}
                parentId={props.product_id}
                setProduct={props.setProduct}
              />
            )
          }
          )
          }
        </div>
        <img className={RelatedCSS.arrowRight} onClick={scrollRightCarousel} src={arrowRight} />
      </div>
    </div>
  )
}

export default AppRelated;

