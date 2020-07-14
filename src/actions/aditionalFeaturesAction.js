

//Add feature
//add feauture to the added feautres array
//remove feature from aditional features

export const ADD_FEATURE = 'ADD_FEATURE'

export function addFeature(feature){
    return {
        type: ADD_FEATURE,
        payload: {feature: feature} 
    }
}