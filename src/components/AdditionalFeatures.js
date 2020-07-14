import React from 'react';
// import {connect } from 'react-redux'
import { useSelector} from 'react-redux';

import AdditionalFeature from './AdditionalFeature';


const AdditionalFeatures = () => {
  const additionalFeatures = useSelector(state => state.additionalFeatures)
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(feature => (
            <AdditionalFeature key={feature.id} feature={feature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

// const mapStateToProps = state =>{
//   return {
//     additionalFeatures: state.additionalFeatures
//   }
// }

export default AdditionalFeatures;
// export default connect(mapStateToProps, {})(AdditionalFeatures)