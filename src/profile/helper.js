import { history } from '../history';
import { store } from '../index';
import { logoutSuccessful } from '../login/actions';
import { unsetUserInfo } from '../user/actions';
export const optionHandle = (option) => {
	switch (option) {
		case 'ChangePassword': {
			history.push('/changepassword');
			break;
		}
		case 'Log Out': {
			localStorage.clear();
			store.dispatch(unsetUserInfo());
			store.dispatch(logoutSuccessful('Successful LogOut'));
			history.push('/login');
			break;
		}

		default:
			break;
	}
};
