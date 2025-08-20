import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";


function AddTeacher() {

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

    let [tfname, setTfname] = useState("");
    let [tlname, setTlname] = useState("");
    let [temail, setTemail] = useState("");
    let [tphone, setTphone] = useState("");
    let [tpass, setTpass] = useState("");
    let [timg, setTimg] = useState("");
    let [tsub, setTsub] = useState("");


    // Validation errors state
    let [errors, setErrors] = useState({
        tfname: "",
        tlname: "",
        temail: "",
        tphone: "",
        tpass: "",
        tsub: "",
        timg: "",
    });

    const validateForm = () => {
        let isValid = true;
        let newErrors = { tfname: "", tlname: "", temail: "", tphone: "", tpass: "", tsub: "", timg: "" };

        // Validate First Name
        if (tfname.trim() === "") {
            newErrors.tfname = "First Name is required";
            isValid = false;
        }

        // Validate Last Name
        if (tlname.trim() === "") {
            newErrors.tlname = "Last Name is required";
            isValid = false;
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(temail)) {
            newErrors.temail = "Invalid email address";
            isValid = false;
        }

        // Validate Phone Number
        if (tphone.trim() === "" || !/^\d{10}$/.test(tphone.trim())) {
            newErrors.tphone = "Phone Number must be a 10-digit number";
            isValid = false;
        }

        // Validate Password
        if (tpass.length < 6) {
            newErrors.tpass = "Password must be at least 6 characters";
            isValid = false;
        }

        // Validate Subject
        if (tsub.trim() === "") {
            newErrors.tsub = "Subject is required";
            isValid = false;
        }

        // Validate Profile Picture
        if (!timg) {
            newErrors.timg = "Profile Picture is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };



    return (
        <>
            <div>
                <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                    {/* Navbar Brand*/}
                    <NavLink className="navbar-brand ps-3" to="/">Admin's Panel</NavLink>
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
                                    <NavLink className="nav-link" to="/AddTeacher">
                                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                                        Add Teacher
                                    </NavLink>
                                    <NavLink className="nav-link" to="/AddAdmin">
                                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                                        Add Admin
                                    </NavLink>
                                    <NavLink className="nav-link" to="/ListTeacher">
                                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                                        Teacher List
                                    </NavLink>
                                    <NavLink className="nav-link" to="/ListAdmin">
                                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                                        Admin List
                                    </NavLink>
                                </div>
                            </div>
                            <div className="sb-sidenav-footer">
                                <div className="small">Logged in as:</div>
                                Admin
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
                                        <div className="coll-1">
                                            <h1>Teacher Registration</h1>
                                        </div>
                                        <div className="coll-2">
                                            <h4><i>Hey! Fill up the information below to create an account with Informative Institute of
                                                Technology.</i></h4>
                                        </div>
                                        <div className="col">
                                            <span >Profile Picture :</span>
                                            <input onChange={(ev) => {
                                                setTimg(ev.target.files[0]);
                                            }} type="file" />
                                            <div className="error">{errors.timg}</div>
                                        </div>
                                        <div className="col">
                                            <span><input onChange={(ev) => {
                                                setTfname(ev.target.value);
                                            }} type="text" id="em" name="first_name" placeholder="First Name*" /></span>
                                            <div className="error">{errors.tfname}</div>
                                        </div>
                                        <div className="col">
                                            <input onChange={(ev) => {
                                                setTlname(ev.target.value);
                                            }} type="text" id="em" name="last_name" placeholder="Last Name*" />
                                            <div className="error">{errors.tlname}</div>
                                        </div>
                                        <div className="col">
                                            <input onChange={(ev) => {
                                                setTemail(ev.target.value);
                                            }} type="email" name="email" id="em" placeholder="Email*" />
                                            <div className="error">{errors.temail}</div>
                                        </div>


                                        <div className="col" id="coll-7">
                                            <input onChange={(ev) => {
                                                setTphone(ev.target.value);
                                            }} type="number" id="em" name="phone" placeholder="Phone Number*" />
                                            <div className="error">{errors.tphone}</div>
                                        </div>
                                        <div className="col">
                                            <div id="password-criteria">
                                                <input onChange={(ev) => {
                                                    setTpass(ev.target.value);
                                                }} type="text" name="password" id="pa" placeholder="Password*" />
                                                <div className="error">{errors.tpass}</div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div id="password-criteria">
                                                <input onChange={(ev) => {
                                                    setTsub(ev.target.value);
                                                }} type="text" name="password" id="pa" placeholder="Profession*" />
                                                <div className="error">{errors.tsub}</div>
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
                                                    fd.append("tfname", tfname);
                                                    fd.append("tlname", tlname);
                                                    fd.append("temail", temail);
                                                    fd.append("tphone", tphone);
                                                    fd.append("tpass", tpass);
                                                    fd.append("tsub", tsub);
                                                    fd.append("timg", timg);
                                                    var resp = await fetch("https://iit-mern-backend.onrender.com/teacher/created", {
                                                        method: "POST",
                                                        body: fd,
                                                    });
                                                    var data = await resp.json();
                                                    console.log(data);
                                                    window.alert("Successfully User Created");
                                                } else {
                                                    console.log("Form is invalid. Please correct the errors.");
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

export default AddTeacher;
