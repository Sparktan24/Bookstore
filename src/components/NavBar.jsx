import { Link } from 'react-router-dom';
import '../styles/navBar.css';
import { HiOutlineUserCircle } from 'react-icons/hi';
//  import styles from '../styles/NavBar.module.css';

const NavBar = () => (
  <nav className="navCont">
    <h1 className="navTitle">Bookstore CMS</h1>
    <ul className="navUl">
      <li className="navLi">
        <Link to="/" activeclassname="active">Books</Link>
      </li>
      <li className="navLi">
        <Link to="categories" activeclassname="active">Categories</Link>
      </li>
    </ul>
    <div className="userIcon">
      <HiOutlineUserCircle />
    </div>
  </nav>
);

export default NavBar;
