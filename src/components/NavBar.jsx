import { Link } from 'react-router-dom';
import styles from '../styles/NavBar.module.css';

const NavBar = () => (
  <nav className={styles.nav}>
    <h1>Bookstore CMS</h1>
    <ul>
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
