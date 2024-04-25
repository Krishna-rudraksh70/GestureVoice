import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/Navbar.module.css';
import logo from './resources/logo-192.png';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="#">
          <Image src={logo} alt="Logo" width={192} height={192} />
          <span>GestureVoice</span>
        </Link>
      </div>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link href="#">
              <span className={styles.navLink}>About</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className={styles.navLink}>Services</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              <span className={styles.navLink}>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
