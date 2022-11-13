import React from "react";
import classes from "./Nav.module.css";


const Nav = () =>{
  return(  <nav className={classes.nav}>
        <div className={classes.item}>
             Profile
        </div>
        <div className={`${classes.item} ${classes.active}`}>
           Messages
        </div>
        <div className={classes.item}>
            News
        </div>
        <div className={classes.item}>
            <a href='src/components/Nav/Nav#s'>Music </a>
        </div>
        <div className={classes.item}>
            <a href='src/components/Nav/Nav#s'>Settings </a>
        </div>
    </nav>
  )
}

export default Nav