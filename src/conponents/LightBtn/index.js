import React,{useState } from "react";
import "./index.less"



export const LightBtn = (props) =>{
    const {changeTitleImage} = props
   // const [light, setLight] = useState(false);
    const changeTitle= (e) =>{
        e.stopPropagation()
        changeTitleImage()
    }

    return(
        <>
            <div className='lightbox-btn open'
                onClick={(e)=>changeTitle(e)}
            />


        </>
    )
}