import React, { useState } from "react";
import ImgGreyBox from "../../images/GreyBox.svg"
import PropTypes from "prop-types";


const buy = <button type="button" className="btn btn-primary">Buy</button>




const GridItem = ({ item }) => {
  const [count, setCount] = useState(0)
  return (
    <div className="col-md-4 col-sm-12 p-5">
      <img src={ImgGreyBox} alt="Default Grey Box" className="mb-3" />
      <h3>{item.header}</h3>
      <p>{item.title}</p>
      <p>{item.Price}</p>
      <p>{count}</p>
      <div className="btn-group">
      <p><button className="btn btn-success mx-3" onClick={() => setCount(count + 1)} disabled={count === 20}>+</button> </p>
      <p><button className="btn btn-danger mx-3" onClick={() => setCount(count - 1)} disabled={count === 0}>-</button></p>
      </div>
      <p>{buy}</p>
    </div>
  );
}

GridItem.propTypes = {
  item: PropTypes.any
}

export default GridItem;