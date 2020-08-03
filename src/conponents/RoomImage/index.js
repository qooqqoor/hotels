import React, {useState} from "react";
import "./index.less"
import {ListImage} from "../../conponents/ListImage"
import {LightBtn} from "../../conponents/LightBtn"

export const RoomImage = (props) =>{
    const {titleImage,listImage,changeTitleImage} = props
    const [light, setLight] = useState({leight:false,checkImage:''});
    return(
        <>

            <div className="room-image ">

                <div className="img-title ">
                    {titleImage&&(
                        <div className="img-title-box imagefadein"
                             style={{
                                 backgroundImage:`url(${titleImage})`,
                             }}
                             onClick={()=>setLight({leight:true,checkImage:titleImage})}
                        >
                            <LightBtn
                                titleImage={titleImage}
                                changeTitleImage={changeTitleImage}
                            />

                        </div>
                    )}
                </div>
                {light.leight&&(
                    <div className="lightbox">
                        <div>
                            <img src={light.checkImage} alt=""/>
                            <div className='lightbox-btn close'onClick={()=>setLight({leight:false})}/>
                        </div>

                    </div>
                )}
                {listImage.length>0?(
                    <div className='img-list'>
                        {listImage.map((item,index)=>{
                            if(item!=titleImage){
                                return(
                                    <ListImage
                                        item = {item}
                                        // changeTitleImage = {changeTitleImage}
                                        key={item}
                                        className="imglist-box imagefadein"
                                        onClick={()=>setLight({leight:true,checkImage:item})}
                                    />

                                )
                            }
                        })}
                    </div>
                ):''}

            </div>
        </>
    )
}