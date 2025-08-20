import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";


function AddProduct() {

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

    const handleSidebarToggle = (event) => {
        event.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
      };

    useEffect(() => {
        const sidebarToggle = document.body.querySelector('#sidebarToggle');
        if (sidebarToggle) {
          sidebarToggle.addEventListener('click', handleSidebarToggle);
        }
        return () => {
            if (sidebarToggle) {
              sidebarToggle.removeEventListener('click', handleSidebarToggle);
            }
          };
    }, []);



    return (
        <>
            <div>
                <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                    {/* Navbar Brand*/}
                    <NavLink className="navbar-brand ps-3" to="/">Teacher's Panel</NavLink>
                    {/* Sidebar Toggle*/}
                    <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" to="/"><i className="fas fa-bars" /></button>
                    {/* Navbar Search*/}
                    <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                        <div className="input-group">
                            <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                            <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search" /></button>
                        </div>
                    </form>
                    {/* Navbar*/}
                    <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" id="navbarDropdown" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw" /></NavLink>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="https://iit-mern-front-end.onrender.com">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                            <div className="sb-sidenav-menu">
                                <div className="nav">
                                    <div className="sb-sidenav-menu-heading">Core</div>
                                    <NavLink className="nav-link" to="/">
                                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                                        Dashboard
                                    </NavLink>
                                    <NavLink className="nav-link" to="/AddStudent">
                                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                                        Add Student
                                    </NavLink>
                                    <NavLink className="nav-link" to="/ListStudent">
                                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                                        Student List
                                    </NavLink>
                                    <NavLink className="nav-link" to="/AddMaterial">
                                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                                        Course Material
                                    </NavLink>
                                    <NavLink className="nav-link" to="/ListMaterial">
                                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                                        Manage Course Material
                                    </NavLink>
                                </div>
                            </div>
                            <div className="sb-sidenav-footer">
                                <div className="small">Logged in as:</div>
                                Teacher
                            </div>
                        </nav>
                    </div>
                    <div id="layoutSidenav_content">
                        <main>
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
                                                        method: "POST",
                                                        body: fd,
                                                    });
                                                    var data = await resp.json();
                                                    console.log(data);
                                                    window.alert("Successfully User Created");
                                                } else {
                                                    console.log("Form is invalid. Please correct the errors.");
                                                    window.alert("Error");
                                                }

                                            }} id="login-button" className="registerbtn">Create
                                                Account</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                        <footer className="py-4 bg-light mt-auto">
                            <div className="container-fluid px-4">
                                <div className="d-flex align-items-center justify-content-between small">
                                    <div className="text-muted">Copyright © IIT 2023</div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>


        </>
    )
}

export default AddProduct;
