import { Link } from "react-router-dom";

import { useContext } from "react";

// import classes from "./MainNavigation.module.css";

// function MainNavigation(props) {
//   return (
//     <header className={classes.header}>
//       <div className={classes.logo}>React Meetups</div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">All meetups</Link>
//           </li>
//           <li>
//             <Link to="/new-meetup">New Meetup?</Link>
//           </li>
//           <li>
//             <Link to="/fav">My Favourites</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
  // NavbarText,
} from "reactstrap";
import props from "../meetups/MeetupItem";

import FavouritesContext from "../../store/favourites-context";

function MainNavigation(args) {
  const favouritesCtx = useContext(FavouritesContext);

  const favCount = favouritesCtx.totalFavourites;

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">{props.sitename}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/">All Meetups</Link>
            </NavItem>
            <NavItem>
              <Link to="/new-meetup">New Meetup?</Link>
            </NavItem>
            <NavItem>
              <Link to="/fav">Favourites({favCount})</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MainNavigation;
