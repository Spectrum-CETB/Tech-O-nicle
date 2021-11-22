import { Redirect } from 'react-router-dom';

function logout() {
	sessionStorage.removeItem("user");

	if(sessionStorage.getItem("user")) {
		<Redirect to = {'/dashboard'}/>
	} else {
		<Redirect to = {'/login-signup'}/>
	}
}	

export default logout;