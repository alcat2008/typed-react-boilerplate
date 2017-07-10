/**
 * Created by alcat on 04/07/2017.
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import count from './count';

export default combineReducers({
  count,
  routing: routerReducer,
});
