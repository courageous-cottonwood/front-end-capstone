import React from 'react';
import CompareCSS from './cssModules/Compare.module.css';

const CompareCard = ({ itemName, itemFeatures, parentItemName, parentFeatures }) => {
  return (
    <>
      <div id = 'compare-card' className={CompareCSS.item}>
        <h3 className={CompareCSS.h3}>{itemName}</h3>
        {itemFeatures.map((element) => (
          <ul className={CompareCSS.list}>
            <li>{element.feature} - {element.value}</li>
          </ul>
        ))}
      </div>
      <div className={CompareCSS.item}>
        <h3 className={CompareCSS.h3}>{parentItemName}</h3>
        {parentFeatures.map((element) => (
          <ul className={CompareCSS.list}>
            <li>{element.feature} - {element.value}</li>
          </ul>
        ))}
      </div>
    </>
  )
};
export default CompareCard;