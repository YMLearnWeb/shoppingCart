import _ from 'lodash';
import {
  FETCH_CART_ITEMS,
  ITEM_REMOVED_FROM_CART,
} from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CART_ITEMS:
      return action.payload;
    case ITEM_REMOVED_FROM_CART:
      return _.without(state, action.payload);
    default:
      return state;
  }
};
