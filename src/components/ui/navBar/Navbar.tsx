import logo from "../../../assets/logo.svg";
import cart from "../../../assets/cart.svg";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarDetail}>
        <img src={logo} alt="Logo del e-commerce" width={50} height={50} />
        <div>
          <span>Armeli Shop</span>
        </div>
      </div>
      <div className={styles.navbarContaner}>
        <p className={styles.navBarTextAmount}>2</p>
        <img src={cart} alt="Carrito de compras" />
      </div>
    </div>
  );
};
