import jwtDecode from 'jwt-decode';

export const isLoggedIn = () => {
	if (localStorage['token']) {
		let token = localStorage['token'].substr(4);
    console.log('token :', jwtDecode(token));
    console.log('Date.now()/1000 :', Date.now()/1000);
		if (jwtDecode(token).exp < Date.now() / 1000) {
			return false;
		} else {
			return true;
		}
  }
  else{
    return false
  }
};
