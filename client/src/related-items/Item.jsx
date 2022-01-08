import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Compare from './Compare.jsx';
import ItemCard from './ItemCard.jsx';
import ItemCSS from './cssModules/Item.module.css';

const Item = (props) => {

  const [image, setImage] = useState('');
  const [noImage, setReplacement] = useState('https://www.budget101.com/images/image-not-available.png?14867')
  const [showCompare, setCompare] = useState(false);

  useEffect(() => {
    axios.get('/products/styles', { params: { product_id: props.id } })
      .then((res) => {
        const item = res.data;
        var thumbnail = item.results[0].photos[0].thumbnail_url;
        setImage(thumbnail);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClickedOnItem = () => {
    props.setProduct(props.id);
  };

  const handleCompareButton = () => {
    setCompare(!showCompare)
  };

  const handleCloseModal = () => {
    setCompare(!showCompare)
  };

  return (
    <div className={ItemCSS.card}>
      {showCompare ?
        <Compare
          key ={props.id-0.1}
          id={props.id}
          parentId={props.parentId}
          name={props.name}
          showModal={handleCloseModal}
        /> : null
      }
      <ItemCard
        key={props.id-0.25}
        id={props.id}
        parentId={props.parentId}
        category={props.category}
        name={props.name}
        price={props.price}
        image={image}
        noImage={noImage}
        clickOnTitle={handleClickedOnItem}
        compareButton={handleCompareButton}
      />
    </div>
  );
};

export default Item;