import React,{useState} from 'react';
import styles from '../Styles/Navbar.module.scss';
import {Link} from "react-router-dom";
import ActiveNav from './ActiveNav';
const Navbar=()=>{

    let activeNav=null;
    const [showNav,setShowNav]=useState(false);

    const buttonHandler=()=>{
        setShowNav(!showNav);
    }

    if(showNav===true){
        activeNav=<ActiveNav buttonHandler={buttonHandler}/>
    }

    return(
        <div className={styles.navbar}>
            <Link className={styles.logo} to='/' ><h1>0x2037ml</h1></Link>
            <div className={styles.links}>
                <Link className={styles.link} to="/courses"><p>Courses</p></Link>
                <Link className={styles.link} to="/profile"><p>Profile</p></Link>
            </div>
            <div className={styles.mobile_links}>
                <button onClick={buttonHandler}><i class="fas fa-skull"></i></button>
            </div>
            {activeNav}
        </div>
    );
}

export default Navbar;