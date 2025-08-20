import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Dashboard() {
    const [products, setProducts] = useState([]);

    async function getProduct() {
        var resp = await fetch('https://iit-mern-backend.onrender.com/auth/profile2');
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
                                    {/* <NavLink className="nav-link" to="/AddProduct"> */}
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
                        <main>
                            <div className="container-fluid px-4">
                                <h1 className="mt-4">Dashboard</h1>
                                <ol className="breadcrumb mb-4">
                                    <li className="breadcrumb-item active">Profile</li>
                                </ol>
                            </div>
                            {products.map(p => (
                                <div className="container emp-profile">
                                <form method="post">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="profile-img">
                                                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt /> */}
                                                <img src={`https://iit-mern-backend.onrender.com/admin/` + p.profile_img} alt="avatar" className="rounded-circle img-fluid" style={{ width: 150 }} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="profile-head">
                                                <h5>
                                                    {p.fname+" "+p.lname}
                                                </h5>
                                                <h6>
                                                    {p.sub}
                                                </h6>
                                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="profile-work">
                                                <p>WORK LINK</p>
                                                <a href>Website Link</a><br />
                                                <a href>Bootsnipp Profile</a><br />
                                                <a href>Bootply Profile</a>
                                                <p>SKILLS</p>
                                                <a href>Web Designer</a><br />
                                                <a href>Web Developer</a><br />
                                                <a href>WordPress</a><br />
                                                <a href>WooCommerce</a><br />
                                                <a href>PHP, .Net</a><br />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="tab-content profile-tab" id="myTabContent">
                                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>User Id</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>{p.fname+"123"}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Name</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>{p.fname+" "+p.lname}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Email</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>{p.email}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Phone</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>{p.phone}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Experience</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>Expert</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Hourly Rate</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>10$/hr</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Total Projects</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>230</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>English Level</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>Expert</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Availability</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>6 months</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <label>Your Bio</label><br />
                                                            <p>Your detail description</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            ))}
                        </main>
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

export default Dashboard;
