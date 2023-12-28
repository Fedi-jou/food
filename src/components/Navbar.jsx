// import React from "react";
// import logo from "../images/logo.svg";
// import { NavLink } from "react-router-dom";
// export default function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-sm navbar-light bg-light ">
//       <NavLink to="/" className="navbar-brand">
//         <img src={logo} alt={logo} />
//       </NavLink>

//       <div className="collapse navbar-collapse show ml-sm-5">
//         <ul className="navbar-nav">
//           <li className="nav-item active ">
//             <NavLink className="nav-link" to="/">
//               Home
//             </NavLink>
//           </li>
//           <li className="nav-item active">
//             <NavLink className="nav-link" to="/recipes">
//               Recipes
//             </NavLink>
//           </li>
//           <li className="nav-item active">
//           <NavLink className="nav-link" to="/signin">
//               Sign In
//             </NavLink>
//             </li> 
//             <li className="nav-item active">
//           <NavLink className="nav-link" to="/signup">
//               Sign Up
//             </NavLink>
//             </li> 
//         </ul>
//       </div>
//     </nav>
//   );
// }

// import React from "react";
// import logo from "../images/logo.svg";
// import { NavLink } from "react-router-dom";
// import "./Navbar.css"; // Import the CSS file

// export default function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-sm navbar-light bg-light ">
//       <div className="navbar-brand-container">
//         <NavLink to="/" className="navbar-brand">
//           <img src={logo} alt={logo} />
//         </NavLink>
//       </div>

//       <div className="navbar-collapse-container">
//         <div className="collapse navbar-collapse show">
//           <ul className="navbar-nav">
//             <li className="nav-item active">
//               <NavLink className="nav-link" to="/">
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item active">
//               <NavLink className="nav-link" to="/recipes">
//                 Recipes
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="navbar-right-container">
//         <ul className="navbar-nav">
//           <li className="nav-item active">
//             <NavLink className="nav-link" to="/signin">
//               Sign In
//             </NavLink>
//           </li>
//           <li className="nav-item active">
//             <NavLink className="nav-link" to="/signup">
//               Sign Up
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// import React from "react";
// import logo from "../images/logo.svg";
// import { NavLink } from "react-router-dom";
// import "./Navbar.css"; // Import the CSS file

// export default function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-sm navbar-light bg-light">
//       <div className="navbar-brand-container">
//         <NavLink to="/" className="navbar-brand">
//           <img src={logo} alt={logo} />
//         </NavLink>
//       </div>

//       <div className="navbar-collapse-container">
//         <div className="collapse navbar-collapse show">
//           <ul className="navbar-nav">
//             <li className="nav-item active">
//               <NavLink className="nav-link" to="/">
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item active">
//               <NavLink className="nav-link" to="/recipes">
//                 Recipes
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="navbar-right-container">
//         <ul className="navbar-nav">
//           <li className="nav-item active">
//             <NavLink className="nav-link btn btn-outline-primary" to="/signin">
//               Sign In
//             </NavLink>
//           </li>
//           <li className="nav-item active">
//             <NavLink className="nav-link btn btn-primary" to="/signup">
//               Sign Up
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

import React from "react";
import logo from "../images/hm.png";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="navbar-brand-container">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt={logo} />
        </NavLink>
      </div>

      <div className="navbar-collapse-container">
        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/recipes">
                Recipes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-right-container">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link text-primary" to="/signin">
              Sign In
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link text-success" to="/signup">
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
