import jwtDecode from 'jwt-decode';
import { setUserData } from './setUserData';
export const isLoggedIn = () => {
	if (localStorage['token'] && localStorage['user']) {
		let token = localStorage['token'].substr(4);
		if (jwtDecode(token).exp < Date.now() / 1000) {
			localStorage.clear();
			return false;
		}
		setUserData();
		return true;
	}
	return false;
};
