import React, { useState } from 'react'
import './Style.css'
import axios from 'axios';

function LoginSignup() {
    const [rightPanel, setRightPanel] = useState(false);
    function handleSignin() {
        setRightPanel(true);
    }
    function handleSignup() {
        setRightPanel(false);
    }

    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        message: '',
        registered: false
    });

    const [login, setLogin] = useState({
        email: '',
        password: '',
        loggedIn: false
    })

    const handleSubmit = (e) => {
        e.preventDefault();


        const user = {
            name: state.name,
            email: state.email,
            phone: state.phone,
            password: state.password
        }

        const alertme = document.getElementById('alert');
        const checkSvg = document.getElementById('check-svg');
        const resp = document.getElementById('login-msg');

        axios.post('https://spectrumcet.com/techonicle/register.php', user)
            .then((res) => {
                if (res.data.status) {
                    setState({ ...state, registered: true });
                }

                if (res.data.status == false) {
                    alertme.classList.add('alert-danger');
                    alertme.classList.remove('alert-success');
                    checkSvg.attributes[0].value = "#exclamation-triangle-fill";
                } else {
                    alertme.classList.remove('alert-danger');
                    alertme.classList.add('alert-success');
                    checkSvg.attributes[0].value = "#check-circle-fill";
                    setRightPanel(true);
                }
                setState({ ...state, message: res.data.response });
                resp.innerHTML = res.data.response;
                alertme.classList.remove('hidden');

            })
            .catch(err => console.log(err));
    }

    const loggingin = (e) => {
        e.preventDefault();

        const logUser = {
            email: login.email,
            password: login.password
        }

        const alertme = document.getElementById('alert');
        const checkSvg = document.getElementById('check-svg');
        const resp = document.getElementById('login-msg');

        axios.post('https://spectrumcet.com/techonicle/login.php', logUser)
            .then((res) => {
                if (res.data.status) {
                    setLogin({ ...login, loggedIn: true });
                }

                if (res.data.status == false) {
                    alertme.classList.add('alert-danger');
                    alertme.classList.remove('alert-success');
                    checkSvg.attributes[0].value = "#exclamation-triangle-fill";
                } else {
                    alertme.classList.remove('alert-danger');
                    alertme.classList.add('alert-success');
                    checkSvg.attributes[0].value = "#check-circle-fill";
                    sessionStorage.setItem("user",res.data.user);
                    console.log(sessionStorage.getItem("user"));
                }
                setLogin({ ...login, message: res.data.response });
                resp.innerHTML = res.data.response;
                alertme.classList.remove('hidden');

            })
            .catch(err => console.log(err));
    }

    const btnClose = document.querySelector('.btn-close');
    if (btnClose) {
        btnClose.addEventListener('click', () => {
            document.getElementById('alert').classList.add('hidden');
        })
    }
    // const message = () => {
    //     if(state.message) {
    //         return(
    //             )
    //     } else {
    //         return(
    //             <div></div>)
    //     }
    // }

    return (<>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
            <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </symbol>
            <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </symbol>
            <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </symbol>
        </svg>

        <div className="container__1 ">
            <div className="alert alert-success d-flex align-items-center hidden" role="alert" id={'alert'}>
                <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img"><use xlinkHref="#check-circle-fill" id={'check-svg'} /></svg>
                <div id={'login-msg'}></div>
                <button type="button" className="btn-close ms-4"></button>
            </div>
            <div className={rightPanel ? "container container_3 right-panel-active" : "container container_3"} id="container_3">
                <div className="form-container sign-up-container">
                    <form onSubmit={loggingin}>
                        <h1 className="heading">Sign in</h1>
                        {/* <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span className="spn">or use your account</span> */}
                        <input type="email" placeholder="Email" onChange={(e) => setLogin({ ...login, email: e.target.value })} value={login.email} />
                        <input type="password" placeholder="Password" onChange={(e) => setLogin({ ...login, password: e.target.value })} value={login.password} />
                        <a href="#" className="social">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form onSubmit={handleSubmit}>
                        <h1 className="heading">Create Account</h1>
                        {/*<div className="social-container">
                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span className="spn">or use your email for registration</span>*/}
                        <input type="text" placeholder="Name" onChange={(e) => setState({ ...state, name: e.target.value })} value={state.name} />
                        <input type="email" onChange={(e) => setState({ ...state, email: e.target.value })} placeholder="Email" value={state.email} />
                        <input type="text" placeholder="Phone" onChange={(e) => setState({ ...state, phone: e.target.value })} value={state.phone} />
                        <input type="password" onChange={(e) => setState({ ...state, password: e.target.value })} placeholder="Password" value={state.password} />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">

                        <div className="overlay-panel overlay-right">
                            <h1>Welcome!</h1>
                            <p className="para">Enter your personal details and start your journey on TECHONICLE with us</p>
                            <p className="para">Already have an account?</p>
                            <button className="ghost signIn" id="signIn" onClick={handleSignin}>Sign In</button>
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
        </div></>
    )
}

export default LoginSignup