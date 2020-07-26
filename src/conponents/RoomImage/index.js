import React from "react";
import "./index.less"
import {ListImage} from "../../conponents/ListImage"

export const RoomImage = (props) =>{
    const {titleImage,listImage,changeTitleImage} = props
    return(
        <div className="room-image ">
            <div className="img-title ">
                {titleImage&&(
                    <div className="img-title-box imagefadein"
                         style={{
                             backgroundImage:`url(${titleImage})`,
                         }}
                    />
                )}
            </div>
            {listImage.length>0?(
                <div className='img-list'>
                    {listImage.map((item,index)=>{
                        if(item!=titleImage){
                            return(
                                <ListImage
                                    item = {item}
                                    changeTitleImage = {changeTitleImage}
                                    key={item}
                                    className="imglist-box imagefadein"
                                />

                            )
                        }
                    })}
                </div>
            ):''}

        </div>
    )
}