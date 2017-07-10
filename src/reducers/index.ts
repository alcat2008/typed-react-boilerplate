/**
 * Created by alcat on 04/07/2017.
 */
import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';
import count, { CountState } from './count';

export interface StoreState {
  count: CountState;
  routing: RouterState;
}

export default combineReducers({
  count,
  routing: routerReducer,
});
