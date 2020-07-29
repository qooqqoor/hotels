import React,{useState } from "react";
import "./index.less"

export const LightBtn = (props) =>{
    const {titleImage} = props
    const [light, setLight] = useState(false);

    return(
        <>
            <div className='lightbox-btn open' onClick={()=>setLight(true)}/>
            {light&&(
                <div className="lightbox">
                    <div>
                        <img src={titleImage} alt=""/>
                        <div className='lightbox-btn close'onClick={()=>setLight(false)}/>
                    </div>

                </div>
            )}

        </>
    )
}