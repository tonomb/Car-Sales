import {ADD_FEATURE} from '../actions/aditionalFeaturesAction'
import {REMOVE_FEATURE} from '../actions/addedFeaturesActions'

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
     return {
        ...state,
        car : {
            ...state.car,
            features: [
                ...state.car.features,
               action.payload.feature
            ]
        },
        additionalFeatures: state.additionalFeatures.filter(item => item.id !== action.payload.feature.id),
        additionalPrice: state.additionalPrice + action.payload.feature.price
    } 
    case REMOVE_FEATURE:
        console.log('trying to remove feature');
        console.log('clicked feature', action.payload.feature);
        return {
            ...state,
            car : {
                ...state.car,
                features: state.car.features.filter(item => item.id !== action.payload.feature.id)
            },
            additionalFeatures:[
                ...state.additionalFeatures,
               action.payload.feature
            ] ,
            additionalPrice: state.additionalPrice - action.payload.feature.price
        } 
    default:
      return state;
  }
};


function addFeatureToCar(state, feature){
    return {
        ...state,
        car : {
            ...state.car,
            features: [
                ...state.car.features,
               feature
            ]
        }
    }   
}