import {Add_TO_CART, Remove_FROM_CART,SET_USER_DATA} from '../../utils/constants';

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_TO_CART:
      return [...state, action.data];
    case Remove_FROM_CART:
      let result = state.filter(item => {
        return item.name != action.data;
      });
      return [...result];

    case SET_USER_DATA:
      return [...state, action.data];

    default:
      return state;
  }
};
