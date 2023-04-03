import { NavLink } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import styles from "./navbar.module.css";

const Navbar = () => {
  const activeStyle = {
    color: "red",
  };

  return (
    <nav className={styles.container}>
      <NavLink
        to="/home"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>Home</p>
      </NavLink>
      <NavLink
        to="/products"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>Products</p>
      </NavLink>
      <NavLink
        to="/cart"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <HiShoppingCart />
      </NavLink>
    </nav>
  );
};

export default Navbar;