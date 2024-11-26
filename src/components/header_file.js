import logo from "../styles/logo.png";
import nav from "../styles/nav_bar.png";
import mainimg from "../styles/images.png";
import style from "../styles/header.module.css";
import { Button } from "@mui/material";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';




function Header_section(){

    const[navClicked, isnavClicked]=useState(false);


    const navigation_clicked=()=>{
        isnavClicked(!navClicked);
    }

    return(
        <div>
            <header className={style.header}>
                <nav className={style.navigation_bar}>
                    <div>
                    <img src={logo} alt="logo.img"></img>
                    </div>
                   
                    <div className={style.nav_Side_drop_btn}>
                        <select>
                            <option>Products</option>
                            <option>Products</option>
                        </select>
                        <select>
                            <option>Solutions</option>
                            <option>Solutions</option>
                        </select>
                        <select>
                            <option>Resources</option>
                            <option>Resources</option>
                        </select>
                        <select>
                            <option>Pricing</option>
                            <option>Pricing</option>
                        </select>
                    <Button variant="contained" sx={{backgroundColor: '#FFC107'}} className={style.nav_btn}>Login</Button>
                    <Button variant="contained" color="primary" className={style.nav_btn}>Try whitepace Free &#8594;</Button>
                    <img src={nav} alt="nav.img" onClick={navigation_clicked}></img>
                    </div>
                    
                    {
                       navClicked && (<div>
                        <ul>
                            <li>Products</li>
                            <li>Solutions</li>
                            <li>Resources</li>
                            <li>Pricing</li>
                        </ul>
                       </div>) 
                    }
                </nav>

                <div className={style.header_siding}>
                <div className={style.image_side}>
                <h3>
                    Get More Done with whitepace
                </h3>
                <p>Project management software enables your team to colloborate, plan, analyze, and manage everyday tasks</p>
                <Button variant="contained" color="primary" className={style.utton}>Try Taskkey Free &#8594;</Button>
                </div>
                <div className={style.main_image}><img src={mainimg}></img></div>
                </div>
            </header>
        </div>
    )
}

export default Header_section