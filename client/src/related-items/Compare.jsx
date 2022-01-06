import React, { useEffect, useState } from 'react';
import axios from 'axios';

// import StarRating from './StarRating.jsx';
// import RelatedCSS from './cssModules/Related.module.css';
import CompareCSS from './cssModules/Compare.module.css';
import CompareCard from './CompareCard';

const Compare = (props) => {

  //create state to keep track of currentItem fetures
  //call to get feature list from the parentID
  //create layout to compare feature list
  const [parentFeatures, setParentFeatures] = useState([]);
  const [parentItemName, setParentItemName] = useState([]);
  const [itemName, setItemName] = useState([]);
  const [itemFeatures, setItemFeatures] = useState([]);

  const [isLoading, setLoading] = useState(true); //set true

  //const [showCompare, setCompare] = useState(false);

  useEffect(() => {
    var idArr = [props.id, props.parentId];
    getFeatures(idArr);

  }, []);

  const getFeatures = (dataArr) => {
    var itemFeatures = [];
    var itemName = []
    let promises = [];
    for (var i = 0; i < dataArr.length; i++) {
      promises.push(axios.get('/products/get', { params: { product_id: dataArr[i] } })
        .then((res) => {
          //console.log(res.data.features);
          itemFeatures.push(res.data.features);
          itemName.push(res.data.name);
        })
        .catch((err) => {
          console.log(err);
        })
      );
    }
    Promise.all(promises).then(() => {
      // console.log(itemName);
      // console.log(itemFeatures);
      setItemFeatures(itemFeatures[0]);
      setItemName(itemName[0]);
      setParentFeatures(itemFeatures[1]);
      setParentItemName(itemName[1]);
      setLoading(false);
    });
  }

  if (isLoading) {
    return (
      <div className={CompareCSS.container}
        onClick={props.closeModal}>
        <h3>FETCHING DATA</h3>
        <div className={CompareCSS.loader}></div>
      </div>
    )
  }

  return (
    <div className={CompareCSS.container}
      onClick={props.showModal}>
        <CompareCard
        key ={props.id}
        id = {props.id}
        parentId = {props.parentId}
        itemName = {itemName}
        itemFeatures ={itemFeatures}
        parentItemName={parentItemName}
        parentFeatures={parentFeatures}/>
    </div >
  )
};
export default Compare;