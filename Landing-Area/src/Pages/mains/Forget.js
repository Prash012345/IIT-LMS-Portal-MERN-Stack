import { NavLink } from "react-router-dom";

function Forget() {
    return (
        <>
            <div>
                <div className="left">
                    <div id="login">
                        <div id="logo">
                            <img src="../images/logos/IIT-logo.png" alt="IIT_logo" width="30%" />
                        </div>
                        <div className="container">
                            <div className="fp">
                                <h1>Forgot Password</h1>
                            </div>
                            <div className="fp">
                                <p>Enter your registered email to reset your password.</p>
                            </div>
                            <div className="fp em">
                                <input type="text" name="email" id="em" placeholder="Email Address*" required />
                            </div>
                            <div>
                                <input type="submit" defaultValue="Send" id="login-button" />
                            </div>
                            <div className="create">
                                <span>Don't have an account?</span>
                                <NavLink to="/signup" style={{ textDecoration: 'none' }}>Create Account Now</NavLink>
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

export default Forget;