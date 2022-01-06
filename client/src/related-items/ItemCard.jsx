import React from 'react';

//import Item from './Item.jsx';
import StarRating from './StarRating.jsx';
import ItemCSS from './cssModules/Item.module.css';
import RelatedCSS from './cssModules/Related.module.css';

const ItemCard = ({ category, image, name, noImage, id, parentId, price, clickOnTitle, compareButton}) => {
  return (
    <>
      <div id = 'card' className={ItemCSS.inner}>
        <h4 className={ItemCSS.h4}>{category}</h4>
        <h2 className={ItemCSS.item_title} onClick={clickOnTitle}>{name}</h2>
        {image === undefined
          ?
          <div className={RelatedCSS.loader_container}>
            <div className={RelatedCSS.loader}></div>
          </div>
          :
          <img className={ItemCSS.image} src={image === null ? noImage : image} />
        }
        <p className={ItemCSS.par}>{`$${price}`}</p>
        <StarRating
          id={id}
          parentId={parentId}
        />
          <button className={ItemCSS.button_compare} onClick={compareButton}>Compare Me</button>
      </div>
    </>
  )
}

export default ItemCard;


