'use client';
// import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from "next/image";
import { usePathname } from 'next/navigation';  



const Navbar = () => {

  const pathname = usePathname();
  // const pathname=router.pathname
  // const { pathname, asPath } = router;



// console.log(pathname.startsWith('/'));


  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/netflix.png" alt="Netflix Logo" width={60} height={40} />
        </Link>
      </div>
      <div className={styles.navItems}>
        <div>
          <ul className={styles.navLinks}>
            <li><Link className={pathname==='/' ? styles.active : ''} href="/">Home</Link></li>
            <li><Link className={pathname.startsWith('/movies') ? styles.active : ''} href="/movies">Movies</Link></li>
            <li><Link className={pathname=='/series' ? styles.active : undefined} href="/series">Series</Link></li>
            <li><Link className={pathname=='/contact' ? styles.active : undefined} href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className={styles.profileIcon}>
          <input placeholder='Search Here...' className={styles.search} type="search" />
          <button className={styles.btn}><Image src="/profile.png" alt="Netflix Logo" width={30} height={30} /></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
