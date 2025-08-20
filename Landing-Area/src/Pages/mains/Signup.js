import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();

    const Click = () => {
        navigate('/signup/signupwithemail');
    };
    return (
        <>
            <div>
                <div className="left">
                    <div id="login">
                        <div id="logo">
                            <img src="../images/logos/IIT-logo.png" alt="IIT_logo" width="30%" />
                        </div>
                        <div id="reg">
                            <h1>
                                Register
                            </h1>
                        </div>
                        <div id="CA">
                            <div>
                                <span>
                                    Tap on any option to create an account with
                                </span>
                            </div>
                            <div>
                                <span>
                                    Informative Institute of Technology.
                                </span>
                            </div>
                        </div>
                        <div className="loginbn">
                            <div>
                                <button type="button" className="bttn bn" style={{ padding: '15px 37px', background: '#DD4B39' }}><i className="fa-brands fa-google" style={{ color: '#f1f4f8' }} />&nbsp;&nbsp;Sign up with Google</button>
                            </div>
                            <div>
                                <button type="button" className="bttn bn" style={{ padding: '15px 30px', background: '#0077B5' }}><i className="fa-brands fa-linkedin-in" style={{ color: '#f7f7f8' }} />&nbsp;&nbsp;Sign up with Linkedin</button>
                            </div>
                            <div>
                                <button type="button" className="bttn bn" style={{ padding: '15px 30px', background: '#3B5999' }}><i className="fa-brands fa-facebook-f" style={{ color: '#f4f7fa' }} />&nbsp;&nbsp;Sign up with Facebook</button>
                            </div>
                            <div>
                                <button type="button" className="bttn bn" style={{ padding: '15px 45px', background: 'black' }}><i className="fa-brands fa-apple" style={{ color: '#f5f7fa' }} />&nbsp;&nbsp;Sign up with Apple</button>
                            </div>
                            <div>
                                {/* <button onclick="location.href='/signup/signupwithemail';" type="button" className="bttn bn" style={{ padding: '15px 45px', color: '#118AEF', background: '#ffffff', border: '1px solid #118AEF'}}><i className="fa-regular fa-envelope" style={{ color: '#118AEF' }} />&nbsp;&nbsp;Sign up with Email </button> */}
                                <button onClick={Click} type="button" className="bttn bn" style={{ padding: '15px 45px', color: '#118AEF', background: '#ffffff', border: '1px solid #118AEF'}}><i className="fa-regular fa-envelope" style={{ color: '#118AEF' }} />&nbsp;&nbsp;Sign up with Email </button>
                            </div>
                            <div id="sign">
                                <br />
                                <label htmlFor="login">Already have an account?</label>
                                <NavLink to="/" style={{ textDecoration: 'none' }}>Login</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="image">
                        <img src="../images/student.jpg" alt="Student_Img" />
                    </div>
                </div>
            </div>


        </>
    );
}

export default Signup;