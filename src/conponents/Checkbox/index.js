import React from "react";
import "./index.less"

export const Checkbox = (props) =>{
    const {children,checkimg}=props
    return(
        <div className='checkbox'>


           <i className={`checkbox-icon ${checkimg?'checked':'nochecked'}`}/><span>{children}</span>


        </div>
    )
}