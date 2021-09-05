import React from "react";
import "../css/HeaderOption.css";
import {Avatar} from "@material-ui/core";

function HeaderOption({Icon,title,avatar}) {
    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption-icon"/>}
            {avatar && (
                <Avatar className="headerOption-icon" src={avatar}/>
            )}
            <h3 className="headerOption-title">{title}</h3>
        </div>
    );
}

export default HeaderOption;