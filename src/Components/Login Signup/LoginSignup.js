import React, {useState} from 'react'
import './Style.css'
import axios from 'axios';

function LoginSignup() {
    const [rightPanel, setRightPanel] = useState(false);
    function handleSignin(){
        setRightPanel(true);
    }
    function handleSignup(){
        setRightPanel(false);
    }

    const [state,setState] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        registered: false
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            name: state.name,
            email: state.email,
            phone: state.phone,
            password: state.password
        }

        axios.post('https://spectrumcet.com/techonicle/register.php',user)
        .then((res) => {
            if(res.data.status) {
                setState({...state,registered:true});
            } 

            console.log(state.registered)
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="container__1 ">
        <div className={rightPanel ? "container container_3 right-panel-active" : "container container_3"} id="container_3">
       
        <div className="form-container sign-up-container">
            <form action="#">
                <h1 className="heading">Sign in</h1>
                <div className="social-container">
                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span className="spn">or use your account</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#" className="social">Forgot your password?</a>
                <button>Sign In</button>
            </form>
        </div>
        <div className="form-container sign-in-container">
            <form onSubmit = { handleSubmit }>
                <h1 className="heading">Create Account</h1>
                {/*<div className="social-container">
                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span className="spn">or use your email for registration</span>*/}
                <input type="text" placeholder="Name" onChange = { (e) => setState({...state,name: e.target.value}) } value = { state.name }/>
                <input type="email" onChange = { (e) => setState({...state,email: e.target.value}) } placeholder="Email" value = { state.email }/>
                <input type="text" placeholder="Phone" onChange = { (e) => setState({...state,phone: e.target.value}) } value = { state.phone }/>
                <input type="password" onChange = { (e) => setState({...state,password: e.target.value}) } placeholder="Password" value = { state.password }/>
                <button>Sign Up</button>
            </form>
        </div>
        <div className="overlay-container">
            <div className="overlay">

                <div className="overlay-panel overlay-right">
                    <h1>Welcome!</h1>
                    <p className="para">Enter your personal details and start your journey on TECHONICLE with us</p>
                    <p className="para">Already have an account?</p>
                    <button className="ghost signIn" id="signIn"  onClick={handleSignin}>Sign In</button>
                </div>
                
                <div className="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p className="para">To explore the world of TECHONICLE with us please login with your personal info</p>
                    <p className="para">Not a member yet?</p>
                    <button className="ghost signUp" id="signUp" onClick={handleSignup}>Sign Up</button>
                </div>

                
            </div>
        </div>
    </div>
    </div>
    )
}

export default LoginSignup