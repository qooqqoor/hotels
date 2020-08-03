import React from "react";
import "./index.less"

export const ListImage = (props) =>{
    const {item,className,changeTitleImage,onClick} = props

    return(
        <div className='imglist'>
            <div
                className={className}
                style={{
                    backgroundImage:`url(${item})`,
                }}
                onClick={()=>onClick()}
            />
        </div>

    )

}