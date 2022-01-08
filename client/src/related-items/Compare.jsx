import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CompareCSS from './cssModules/Compare.module.css';
import CompareCard from './CompareCard';

const Compare = (props) => {

  const [parentFeatures, setParentFeatures] = useState([]);
  const [parentItemName, setParentItemName] = useState([]);
  const [itemName, setItemName] = useState([]);
  const [itemFeatures, setItemFeatures] = useState([]);
  const [isLoading, setLoading] = useState(true);

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
          itemFeatures.push(res.data.features);
          itemName.push(res.data.name);
        })
        .catch((err) => {
          console.log(err);
        })
      );
    }
    Promise.all(promises).then(() => {
      setItemFeatures(itemFeatures[0]);
      setItemName(itemName[0]);
      setParentFeatures(itemFeatures[1]);
      setParentItemName(itemName[1]);
      setLoading(false);
    });
  };

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
    <div id = 'modal'className={CompareCSS.container}
      onClick={props.showModal}>
        <CompareCard
        key ={props.id-0.25}
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