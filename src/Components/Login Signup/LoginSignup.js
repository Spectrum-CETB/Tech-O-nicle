import React, {useState} from 'react'
import './Style.css'



function LoginSignup() {
    const [rightPanel, setRightPanel] = useState(false);
    function handleSignin(){
        setRightPanel(true);
    }
    function handleSignup(){
        setRightPanel(false);
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
            <form action="#">
                <h1 className="heading">Create Account</h1>
                <div className="social-container">
                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span className="spn">or use your email for registration</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
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