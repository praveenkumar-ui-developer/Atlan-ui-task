import React from 'react'


import { Link } from 'react-router-dom'
function Navbar() {
  const downloadApp = () => {
  
    window.location.href = 'https://dailytaskcrud.netlify.app/';
  };

    return (
        <div className=''>
            
            <nav class="navbar bg-body-light fixed-top mb-5">
      <div class="container  ">
        <a class="navbar-brand col-1 ml-2 " href="#">
        <Link className='text-decoration-none ml-2 logo ' to={'/'}><h2>AcmeNote</h2></Link>
        </a>

        {/* nav links */}
        <div className="justify-content-start align-items-start col-6  "
                        id=""
                    >
                        
                        <ul className=" list-group-horizontal nav justify-content-start  " Style={"--bs-scroll-height: 150px;"}>
                        
                <Link to='/whyAcme' class="nav-link  d-none d-lg-block text-dark " href="/whyAcme" >
                  WhyAcme
                </Link>
                
              
              
                            <Link to={"https://dailytaskcrud.netlify.app/"} className="nav-link  text-dark d-none d-lg-block cursor-pointer">
                                
                               Try AcmeNote
                            </Link>
                            
                            <Link to='/pricing' className="nav-link  text-dark d-none d-lg-block cursor-pointer">
                                
                                Pricing
                             </Link>
                            
                           
                           
                        </ul>
                    </div>
                    <div className="justify-content-end text-end col-3   "
                        id=""
                    >
                        <ul className=" list-group-horizontal nav justify-content-start  " Style={"--bs-scroll-height: 150px;"}>
                      
             
                            <Link to={'/login'} className="nav-link text-dark d-none d-lg-block ">
                               Login
                            </Link>
                            
                            <button className="nav-link text-dark d-none d-lg-block"  onClick={downloadApp}>
                                download
                            </button>
                            
                          
                           
                        </ul>
                    </div>
        <button class="navbar-toggler d-md-block d-lg-none border-none col-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon "></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item dropdown">
                <a class="nav-link text-dark dropdown-toggle text-start" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Features
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#"><i class="bi bi-list-task"></i> Todo List</a></li>
                  <li><a class="dropdown-item" href="#"><i class="bi bi-calendar-event"></i> Calendar</a></li>
                  <li>
                    {/* <hr class="dropdown-divider"/> */}
                  </li>
                  <li><a class="dropdown-item" href="#"><i class="bi bi-bell"></i> Reminders</a></li>
                  <li><a class="dropdown-item" href="#"> <i class="bi bi-bullseye"></i> Planning</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link text-dark dropdown-toggle text-start" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Company
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">History</a></li>
                  <li><a class="dropdown-item" href="#">Our Team</a></li>
                  <li>
                    {/* <hr class="dropdown-divider"/> */}
                  </li>
                  <li><a class="dropdown-item" href="#">Blog</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark active text-start" aria-current="page" href="#">Careers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark text-start" href="#">About</a>
              </li>
              <li className="nav-link text-dark border rounded mt-2">
                               Login
                            </li>
                            
                            <li className="nav-link text-dark border rounded  mt-1 ">
                                Register
                            </li>
                            
            </ul>
            
          </div>
        </div>
      </div>
    </nav>
            
        </div>
    )
}

export default Navbar