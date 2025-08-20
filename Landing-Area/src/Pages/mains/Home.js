import { useState } from 'react';
import { NavLink } from "react-router-dom";



function Home() {

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [userType, setUserType] = useState(''); 
    let [errorMessage, setErrorMessage] = useState('');



    return (
        <>
            <div>
                <div className="left">
                    <div className="detail">
                        <div id="dl">
                            <div className="box" id="d1">
                                <button type="button" className="btn">Campus</button>
                            </div>
                            <div className="box" id="d2">
                                <button type="button" className="btn">Academics</button>
                            </div>
                        </div>
                        <div id="dr">
                            <div className="box" id="d3">
                                <button type="button" className="btn">Admission</button>
                            </div>
                            <div className="box" id="d4">
                               <NavLink to="/ContactUs"><button type="button" className="btn">Contact Us</button></NavLink>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div id="login">
                            <div id="logo">
                                <img src="/images/logos/IIT-logo.png" alt="IIT_logo" width="30%" />
                            </div>
                            <div id="form">
                                {/* <form action="http://localhost:2000/auth/login" method="post"> */}
                                <form name='form'>
                                    <div className="user">
                                        <div id="teach">
                                            <input type="radio" id="teacher" name="users" value={"teachers"} onChange={(ev) => {
                                                setUserType(ev.target.value);
                                            }} />
                                            <label htmlFor="teacher">Teacher</label>
                                        </div>
                                        <div id="teach">
                                            <input type="radio" id="student" name="users" value={"students"} onChange={(ev) => {
                                                setUserType(ev.target.value);
                                            }} />
                                            <label htmlFor="student">Student</label>
                                        </div>
                                        <div id="teach">
                                            <input type='radio' id="admin" name="users" value={"admin"} onChange={(ev) => {
                                                setUserType(ev.target.value);
                                            }} />
                                            <label htmlFor="admin">Admin</label>
                                        </div>
                                    </div>
                                    <div className="cred">
                                        <input type="email" onChange={(ev) => {
                                            setEmail(ev.target.value);
                                        }} className="cred1" id="em" name="email" placeholder="Email*" required />
                                    </div>
                                    <div className="cred">
                                        <input type="password" onChange={(ev) => {
                                            setPassword(ev.target.value);
                                        }} className="cred1" id="pa" name="password" placeholder="Password*" />
                                    </div>
                                    <div id="rmfp">
                                        <div id="rm">
                                            <input type="checkbox" />
                                            <label htmlFor="rempass">Remember Me</label>
                                        </div>
                                        <div id="fp">
                                            <NavLink to="/forget_password" style={{ textDecoration: 'none' }}>Forget Password?</NavLink>
                                        </div>
                                    </div>
                                    <div>
                                        <input onClick={async () => {
                                            if (!email || !password || !userType) {
                                                setErrorMessage('Please fill in all fields.');
                                                return;
                                            }
                                            var fd = new FormData();
                                            fd.append("email", email);
                                            fd.append("password", password);
                                            fd.append("userType", userType);
                                            var resp = await fetch("https://iit-mern-backend.onrender.com/auth/log", {
                                                method: 'POST',
                                                body: fd
                                            });

                                            var data = await resp.json();
                                            console.log('Response from server:', data);
                                            if (data.success) {
                                                window.location = data.myurl;
                                            } else {
                                                setErrorMessage(data.message);
                                            }
                                            
                                        }} type="button" name="submit" defaultValue="Login" id="login-button" />
                                    </div>
                                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                                    <div id="olw">
                                        <span>or Login with</span>
                                    </div>
                                    <div className="loginbttn">
                                        <div id="login1" style={{ paddingTop: 5 }}>
                                            <div>
                                                <button type="button" className="bttn" id="b1" style={{ padding: '15px 37px', background: '#DD4B39' }}><i className="fa-brands fa-google" style={{ color: '#f1f4f8' }} />&nbsp;&nbsp;Google</button>
                                            </div>
                                            <div>
                                                <button type="button" className="bttn" id="b2" style={{ padding: '15px 30px', background: '#0077B5' }}><i className="fa-brands fa-linkedin-in" style={{ color: '#f7f7f8' }} />&nbsp;&nbsp;Linkedin</button>
                                            </div>
                                        </div>
                                        <div id="login2" style={{ paddingTop: 5 }}>
                                            <div>
                                                <button type="button" className="bttn" id="b3" style={{ padding: '15px 30px', background: '#3B5999' }}><i className="fa-brands fa-facebook-f" style={{ color: '#f4f7fa' }} />&nbsp;&nbsp;Facebook</button>
                                            </div>
                                            <div>
                                                <button type="button" className="bttn" id="b4" style={{ padding: '15px 45px', background: 'black' }}><i className="fa-brands fa-apple" style={{ color: '#f5f7fa' }} />&nbsp;&nbsp;Apple</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="sign">
                                        <label htmlFor="signup">Don't Have an Account?</label>
                                        <NavLink to="/signup" style={{ textDecoration: 'none' }}>&nbsp; Sign up</NavLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="image">
                        <img src="/images/student.jpg" alt="Student_Img" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;

