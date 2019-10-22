import { SET_INFO } from '../types';

export default function(state = {}, action = {}) {
  switch (action.type) {
    case SET_INFO:
      return action.info;
    default:
      return state;
  }
}
