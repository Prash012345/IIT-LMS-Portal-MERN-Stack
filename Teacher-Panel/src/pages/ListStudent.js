import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function ListStudent() {


    const [products, setProducts] = useState([]);

    async function getProduct() {
        var resp = await fetch('https://iit-mern-backend.onrender.com/user/list');
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

    let i = 1;




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
                                    {/* <NavLink className="nav-link" to="/AddProduct"> */}
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
                            <div className="container-fluid px-4">
                                <h1 className="mt-4">Student List</h1>
                            </div>
                            {products.map(p => (
                                <section style={{ backgroundColor: '#eee' }}>
                                    <div className="container py-5">
                                        <div className="row">
                                            <div className="col">
                                                <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                                                    <span >Student Record {i++}</span>

                                                </nav>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="card mb-4">
                                                    <div className="card-body text-center">
                                                        <img src={`https://iit-mern-backend.onrender.com/dp-images/` + p.profile_img} alt="avatar" className="rounded-circle img-fluid" style={{ width: 150 }} />
                                                        <h5 className="my-3">{p.fname}</h5>
                                                        <p className="text-muted mb-1">Full Stack Developer</p>
                                                        <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                                                        <div className="d-flex justify-content-center mb-2">
                                                            <button type="button" className="btn btn-danger" onClick={async () => {
                                                                var fd = new FormData();
                                                                fd.append("id", p._id);
                                                                var resp = await fetch("https://iit-mern-backend.onrender.com/user/del", {
                                                                    method: 'POST',
                                                                    body: fd
                                                                });

                                                                var data = await resp.json();
                                                                getProduct();
                                                            }
                                                            }>Delete</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card mb-4 mb-lg-0">
                                                    <div className="card-body p-0">
                                                        <ul className="list-group list-group-flush rounded-3">
                                                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                                <i className="fas fa-globe fa-lg text-warning" />
                                                                <p className="mb-0">https://{p.fname + "_" + p.lname}.com</p>
                                                            </li>
                                                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                                <i className="fab fa-github fa-lg" style={{ color: '#333333' }} />
                                                                <p className="mb-0">{p.fname + "_" + p.lname}</p>
                                                            </li>
                                                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                                <i className="fab fa-twitter fa-lg" style={{ color: '#55acee' }} />
                                                                <p className="mb-0">@{p.fname + "_" + p.lname}</p>
                                                            </li>
                                                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                                <i className="fab fa-instagram fa-lg" style={{ color: '#ac2bac' }} />
                                                                <p className="mb-0">{p.fname + "_" + p.lname}</p>
                                                            </li>
                                                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                                <i className="fab fa-facebook-f fa-lg" style={{ color: '#3b5998' }} />
                                                                <p className="mb-0">{p.fname + "_" + p.lname}</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="card mb-4">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Full Name</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{p.fname + " " + p.lname}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Email</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{p.email}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Mobile</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">{p.phone}</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Address</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="card mb-4 mb-md-0">
                                                            <div className="card-body">
                                                                <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                                                                </p>
                                                                <p className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                                                                <div className="progress rounded" style={{ height: 5 }}>
                                                                    <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</p>
                                                                <div className="progress rounded" style={{ height: 5 }}>
                                                                    <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</p>
                                                                <div className="progress rounded" style={{ height: 5 }}>
                                                                    <div className="progress-bar" role="progressbar" style={{ width: '89%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</p>
                                                                <div className="progress rounded" style={{ height: 5 }}>
                                                                    <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</p>
                                                                <div className="progress rounded mb-2" style={{ height: 5 }}>
                                                                    <div className="progress-bar" role="progressbar" style={{ width: '66%' }} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="card mb-4 mb-md-0">
                                                            <div className="card-body">
                                                                <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                                                                </p>
                                                                <p className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                                                                <div className="progress rounded" style={{ height: 5 }}>
                                                                    <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</p>
                                                                <div className="progress rounded" style={{ height: 5 }}>
                                                                    <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</p>
                                                                <div className="progress rounded" style={{ height: 5 }}>
                                                                    <div className="progress-bar" role="progressbar" style={{ width: '89%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</p>
                                                                <div className="progress rounded" style={{ height: 5 }}>
                                                                    <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</p>
                                                                <div className="progress rounded mb-2" style={{ height: 5 }}>
                                                                    <div className="progress-bar" role="progressbar" style={{ width: '66%' }} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            ))}



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

export default ListStudent;
