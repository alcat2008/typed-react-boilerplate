/**
 * Created by alcat on 04/07/2017.
 */
import { INCREASE, DECREASE } from '../constant/dictActions';

const initialState = {
  number: 1
};

export default function update(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + action.payload,
      };
    case DECREASE:
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
}
