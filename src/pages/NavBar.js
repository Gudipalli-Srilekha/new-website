// import React, { useState } from 'react';
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,

//     Nav,
//     NavItem,
//     NavLink,NavbarBrand


// } from 'reactstrap';
// import { ImSearch } from "react-icons/im";

// import { Link } from 'react-router-dom';
// import { FaCircleUser } from "react-icons/fa6";

// function Navb(args) {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggle = () => setIsOpen(!isOpen);

//     return (



// <div className='top'>
//                     <Navbar expand="md">
// <NavbarBrand className='brand'  href="/">NEUZY</NavbarBrand>
//                         <NavbarToggler className='tog'  onClick={toggle}   />
//                         <Collapse  isOpen={isOpen} navbar>
//                             <Nav className="me-auto" navbar>
//                                <div className='head'>
//                                     <NavItem>
//                                         <NavLink ><Link className='links' to="/Sport">Sport</Link></NavLink>
//                                     </NavItem>

//                                     <NavItem>
//                                         <NavLink ><Link className='links' to="/Health">Health</Link>
//                                         </NavLink>
//                                     </NavItem>

//                                     <NavItem>
//                                         <NavLink ><Link className='links'to="/Political">Political</Link>
//                                         </NavLink>
//                                     </NavItem>

//                                     <NavItem>
//                                         <NavLink ><Link className='links' to="/ Business"> Business</Link>
//                                         </NavLink>
//                                     </NavItem>

//                                     <NavItem>
//                                         <NavLink ><Link className='links' to="/Finance">Finance</Link>
//                                         </NavLink>
//                                     </NavItem>


//                                     <NavItem>
//                                         <NavLink><Link className='links' to="/Entertainment">Entertainment</Link>
//                                         </NavLink>
//                                     </NavItem></div>

//                                 <div className='right'>
//                                     <NavItem>
//                                         <NavLink><Link style={{color:'white'}} to="/search"><ImSearch /></Link>
//                                         </NavLink>
//                                     </NavItem>
//                                     <div className='divider'></div>


//                                 <NavItem>
//                                     <NavLink><Link  className='links'to="/login">login</Link>
//                                     </NavLink>
//                                 </NavItem>
//                                 <NavItem>
//                                     <NavLink><Link className='links' to="/Register">Register</Link>
//                                     </NavLink>
//                                 </NavItem>


//                                 <NavItem>
//                                     <NavLink ><Link className='links' to="/user"><FaCircleUser /></Link>
//                                     </NavLink>
//                                 </NavItem>

//                                 </div>


//                             </Nav>

//                         </Collapse>
//                     </Navbar>
//                     </div>




//     );
// }

// export default Navb;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
    
    
    
} from 'reactstrap';
// import { ImSearch } from "react-icons/im";


// import { FaCircleUser } from "react-icons/fa6";



function NavBar(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='myhead'>
            <Nav className="me-auto " navbar>
            <Navbar expand="md" className="mynav">
                
            <NavbarBrand>
                   <Link to="/Home" className='links'><b>NEUZY</b></Link>
              </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    
                        <NavItem>
                            <NavLink><Link className='links ' to="/sports">Sports</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink ><Link className='links' to="/health">Health</Link>
                            </NavLink>
                        </NavItem>
                        
                       <NavItem>
                            <NavLink ><Link className='links' to="/business"> Business</Link>
                                        </NavLink>
                                    </NavItem>
                          <NavItem>
                              <NavLink ><Link className='links' to="/general">General</Link>                                        </NavLink>
                          </NavItem>
                             <NavItem>
                              <NavLink><Link className='links' to="/entertainment">Entertainment</Link>
                                        </NavLink>
                                    </NavItem>
                                    
                                    <NavItem>                     
            <UncontrolledDropdown nav dropup
    className="me-2"
    
  >
    <DropdownToggle
      nav caret className='text-white'
     
    >
      Country
    </DropdownToggle>
    <DropdownMenu right>
    <DropdownItem><Link to="/in" className='links text-dark'>INDIA</Link></DropdownItem>
                <DropdownItem><Link to="/us" className='links text-dark'>USA</Link></DropdownItem>
      
      
    </DropdownMenu>
  </UncontrolledDropdown></NavItem>
                                    
                                                                    
                                    

                        {/* <NavItem>
                                        <NavLink><Link style={{ color: 'white' }}  to="/search"><ImSearch /></Link>
                                         </NavLink>
                                     </NavItem> */}
                                     {/* <form className='d-flex'>
                                        <input className='form-control me-2' type='search' placeholder='search' aria-label='true'></input>
                                        <button className='btn btn-outline-success' type='submit'>search</button>
                                     </form> */}
                                    {/* <div className='divider' ></div> */}
                                                                     
                                    


                               {/* <NavItem>
                                   <NavLink ><Link className='links'  to="/user"><FaCircleUser /></Link>
                                    </NavLink>
                                </NavItem> */}

                    
                    
                </Collapse>
            </Navbar>
            </Nav>
        </div>
        
    );
}

export default NavBar;