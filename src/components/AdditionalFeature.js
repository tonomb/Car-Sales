import React from 'react';
// import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'

import {addFeature} from '../actions/aditionalFeaturesAction'

const AdditionalFeature = props => {
  const dispatch = useDispatch()
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      {/* <button onClick={()=>props.addFeature(props.feature)} className="button">Add</button> */}
      <button onClick={()=>dispatch(addFeature(props.feature))} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
// export default connect(null,{addFeature})(AdditionalFeature);
