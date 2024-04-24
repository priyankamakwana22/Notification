import {GET_CITIES} from './Action';

const initialState = {
  cities: [],
};

export const fetchReducer = (state = initialState, action) => {
  console.log('🚀 ~ FetchReducer ~ state:', state);
  switch (action.type) {
    case GET_CITIES:
      return {...state, cities: action.payload};
    default:
      return state;
  }
};
