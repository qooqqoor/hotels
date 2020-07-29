import React from "react";
import "./index.less"

export const GaryBtn = (props) =>{
    const {onClick,children}=props
    return(
        <div className="species-btnBox"
             onClick={onClick}
        >{children}</div>
    )
}