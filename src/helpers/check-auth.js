import jwtDecode from 'jwt-decode';
import { setUserData } from './setUserData';
export const isLoggedIn = () => {
	if (localStorage['token'] && localStorage['user']) {
		setUserData();
		let token = localStorage['token'].substr(4);
		if (jwtDecode(token).exp < Date.now() / 1000) {
			return false;
		}
		return true;
	}
	return false;
};
