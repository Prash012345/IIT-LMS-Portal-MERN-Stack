import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


function AddMaterial() {

    let [smaterial, setSmaterial] = useState("");
    let [smat_desc, setSmat_desc] = useState("");
    // let [semail, setSemail] = useState("");
    let semail="";


    // Validation errors state
    let [errors, setErrors] = useState({
        smaterial: "",
        smat_desc: ""
    });

    const validateForm = () => {
        let isValid = true;
        let newErrors = { smaterial: "" };

        if (!smaterial) {
            newErrors.smaterial = "Course Material is required";
            isValid = false;
        }

        if (smat_desc.trim() === "") {
            newErrors.smat_desc = "Material Description is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };


    const [products, setProducts] = useState([]);
    async function getProduct() {
        var resp = await fetch('https://iit-mern-backend.onrender.com/auth/profile');
        var rdata = await resp.json();
        setProducts(rdata.data);

    }
    const handleSidebarToggle = (event) => {
        event.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
        localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
      };

    useEffect(() => {
        getProduct();
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
                                            <h1>Upload Course Material</h1>
                                            <b><span>{products.map(p => (
                                                semail=p.email
                                                ))}</span></b>
                                        </div>
                                        <div className="container">
                                            <div className="col">
                                                <span >Material :</span>
                                                <input onChange={(ev) => {
                                                    setSmaterial(ev.target.files[0]);
                                                }} type="file" />
                                                <div className="error">{errors.smaterial}</div>

                                            </div>
                                            <div className="col" id="col-3">
                                                <input onChange={(ev) => {
                                                    setSmat_desc(ev.target.value);
                                                }} type="textarea" className="fnln" name="first_name" placeholder="Course Material Description*" />
                                                <div className="error">{errors.smat_desc}</div>
                                            </div>
                                            <div className="col">
                                                <button onClick={async () => {
                                                    if (validateForm()) {
                                                        var fd = new FormData();
                                                        fd.append("smat_desc", smat_desc);
                                                        fd.append("semail", semail);
                                                        fd.append("smaterial", smaterial);
                                                        var resp = await fetch("https://iit-mern-backend.onrender.com/material/submit", {
                                                            method: "POST",
                                                            body: fd,
                                                        });
                                                        var data = await resp.json();
                                                        console.log(data);
                                                        window.alert("Successfully Uploaded");
                                                    } else {
                                                        console.log("Form is invalid. Please correct the errors.");
                                                        window.alert("Error");
                                                    }

                                                }} id="login-button" className="registerbtn">Submit</button>
                                            </div>
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

export default AddMaterial;
