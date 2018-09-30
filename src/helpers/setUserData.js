import { store } from '../index';
import { setUserInfo } from '../user/actions';

export const setUserData = () => {
  let userData = JSON.parse(localStorage['user'])
	store.dispatch(setUserInfo(userData));
};
