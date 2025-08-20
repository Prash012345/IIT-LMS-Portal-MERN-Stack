import { NavLink } from "react-router-dom";
import { useState } from "react";

function Signupwithemail() {
    let [sfname, setSfname] = useState("");
    let [slname, setSlname] = useState("");
    let [semail, setSemail] = useState("");
    let [sphone, setSphone] = useState("");
    let [spass, setSpass] = useState("");
    let [simg, setSimg] = useState("");


    // Validation errors state
    let [errors, setErrors] = useState({
        sfname: "",
        slname: "",
        semail: "",
        sphone: "",
        spass: "",
        simg: "",
    });

    const validateForm = () => {
        let isValid = true;
        let newErrors = { sfname: "", slname: "", semail: "", sphone: "", spass: "", simg: "" };

        // Validate First Name
        if (sfname.trim() === "") {
            newErrors.sfname = "First Name is required";
            isValid = false;
        }

        // Validate Last Name
        if (slname.trim() === "") {
            newErrors.slname = "Last Name is required";
            isValid = false;
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(semail)) {
            newErrors.semail = "Invalid email address";
            isValid = false;
        }

        // Validate Phone Number
        if (sphone.trim() === "" || !/^\d{10}$/.test(sphone.trim())) {
            newErrors.sphone = "Phone Number must be a 10-digit number";
            isValid = false;
        }

        // Validate Password
        if (spass.length < 6) {
            newErrors.spass = "Password must be at least 6 characters";
            isValid = false;
        }

        // Validate Profile Picture
        if (!simg) {
            newErrors.simg = "Profile Picture is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };





    return (
        <>
            <div>
                <div className="left">
                    <div id="login">
                        <div id="logo">
                            <img src="../images/logos/IIT-logo.png" alt="IIT_logo" width="30%" />
                        </div>
                        <div id="form">
                            <div className="col-1">
                                <h1>Register</h1>
                            </div>
                            <div className="col-2">
                                <h4><i>Hey! Fill up the information below to create an account with Informative Institute of
                                    Technology.</i></h4>
                            </div>
                            <div className="container">
                                <div className="col">
                                    <span >Profile Picture :</span>
                                    <input onChange={(ev) => {
                                        setSimg(ev.target.files[0]);
                                    }} type="file" />
                                    <div className="error">{errors.simg}</div>
                                </div>
                                <div className="col" id="col-3">
                                    <span><input onChange={(ev) => {
                                        setSfname(ev.target.value);
                                    }} type="text" className="fnln" name="first_name" placeholder="First Name*" /></span>
                                    <div className="error">{errors.sfname}</div>
                                </div>
                                <div className="col" id="col-4">
                                    <input onChange={(ev) => {
                                        setSlname(ev.target.value);
                                    }} type="text" className="fnln" name="last_name" placeholder="Last Name*" />
                                    <div className="error">{errors.slname}</div>
                                </div>
                            </div>
                            <div className="col">
                                <input onChange={(ev) => {
                                    setSemail(ev.target.value);
                                }} type="email" name="email" id="em" placeholder="Email*" /><p />
                                <div className="error">{errors.semail}</div>
                            </div>
                            <div className="col" id="col-6">
                                <select name="data-countryCode" id="data-countryCode" defaultValue={91}>
                                    <option data-countrycode="HT" value={509}>Haiti (+509)</option>
                                    <option data-countrycode="HN" value={504}>Honduras (+504)</option>
                                    <option data-countrycode="HK" value={852}>Hong Kong (+852)</option>
                                    <option data-countrycode="HU" value={36}>Hungary (+36)</option>
                                    <option data-countrycode="IS" value={354}>Iceland (+354)</option>
                                    <option data-countrycode="IN" value={91} >India (+91)</option>
                                    <option data-countrycode="ID" value={62}>Indonesia (+62)</option>
                                    <option data-countrycode="IR" value={98}>Iran (+98)</option>
                                    <option data-countrycode="IQ" value={964}>Iraq (+964)</option>
                                    <option data-countrycode="IE" value={353}>Ireland (+353)</option>
                                    <option data-countrycode="IL" value={972}>Israel (+972)</option>
                                    <option data-countrycode="IT" value={39}>Italy (+39)</option>
                                    <option data-countrycode="JM" value={1876}>Jamaica (+1876)</option>
                                </select>
                            </div>
                            <div className="col" id="col-7">
                                <input onChange={(ev) => {
                                    setSphone(ev.target.value);
                                }} type="number" id="phone" name="phone" placeholder="Phone Number*" />
                                <div className="error">{errors.sphone}</div>
                            </div>
                            <div className="col">
                                <div id="password-criteria">
                                    <input onChange={(ev) => {
                                        setSpass(ev.target.value);
                                    }} type="text" name="password" id="pa" placeholder="Password*" />
                                    <div className="error">{errors.spass}</div>
                                </div>
                            </div>
                            <div className="col">
                                <input type="checkbox" id="condition" name="condition" defaultValue="condition" />
                                <label htmlFor="condition"> I agree to the Terms and Conditions</label>
                            </div>
                            <div className="col">
                                <button onClick={async () => {
                                    if (validateForm()) {
                                        var fd = new FormData();
                                        fd.append("sfname", sfname);
                                        fd.append("slname", slname);
                                        fd.append("semail", semail);
                                        fd.append("sphone", sphone);
                                        fd.append("spass", spass);
                                        fd.append("simg", simg);
                                        var resp = await fetch("https://iit-mern-backend.onrender.com/user/created", {
                                            method: 'POST',
                                            body: fd
                                        });
                                        var data = await resp.json();
                                        console.log(data);
                                        window.alert("Success");
                                    } else {
                                        console.log("Form is invalid. Please correct the errors.");
                                        window.alert("Error");
                                    }
                                }} id="login-button" className="registerbtn">Create
                                    Account</button>
                            </div>
                            <div id="col-11">
                                <span>Already have an account? <NavLink to="/">Login</NavLink>.</span>
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


export default Signupwithemail;
