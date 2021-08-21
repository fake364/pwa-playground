import React from "react";
import { Link } from "react-router-dom";
import Path from "../../common/constants/paths";


const MainMenu = () => {
    return <div><h1>Main menu</h1>
        <Link to={Path.portal}>Go to portal</Link>
    </div >
}
export default MainMenu;