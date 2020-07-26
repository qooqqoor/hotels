import React from "react";
import "./index.less"

export const ListImage = (props) =>{
    const {item,className,changeTitleImage} = props

    return(
        <div className='imglist'>
            <div
                className={className}
                style={{
                    backgroundImage:`url(${item})`,
                }}
                onClick={()=>changeTitleImage(item)}
            />
        </div>

    )

}