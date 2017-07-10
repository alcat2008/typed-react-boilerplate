
import * as ReduxActions from 'redux-actions';
import { INCREASE, DECREASE } from '../constant/dictActions';

const { createAction } = ReduxActions;

/**
 * Randomly simulate network failures.
 * It is useful to enable this during development to make sure our app works
 * in real-world conditions.
 */
function isNetworkFailure() {
  const chanceOfFailure = 0;  // 0..1
  return Math.random() < chanceOfFailure;
}

/**
 * Helper for the other functions in this file.
 * Simulates a short delay and then returns a provided value or failure.
 * This is just a dummy example. Normally we'd make a HTTP request,
 * see http://facebook.github.io/react-native/docs/network.html
 */
// eslint-disable-next-line
function _makeSimulatedNetworkRequest(getValue): Promise<any> {
  const durationMs = 400;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isNetworkFailure()) {
        reject(new Error('Network failure'));
      } else {
        getValue(resolve, reject);
      }
    }, durationMs);
  });
}

export const increase: ReduxActions.ActionFunction1<number, Object> = createAction(INCREASE);
export const decrease: ReduxActions.ActionFunction1<number, Object> = createAction(DECREASE);
export const increaseAsync = (count: number) => dispatch => {
  setTimeout(() => {
    dispatch(increase(count));
  }, 1000);
};
export const increaseByRequest = (count: number) =>
  _makeSimulatedNetworkRequest((resolve) => {
    resolve(increase(count));
  });
