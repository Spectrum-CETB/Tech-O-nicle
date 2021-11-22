import { Redirect } from 'react-router-dom';

function LogoutComponent() {
	sessionStorage.removeItem("user");

	return(<Redirect to = {'/'}/>)
}	

export default LogoutComponent;