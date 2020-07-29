import React from "react";
import "./index.less"

export const TextBodyLeft = (props) =>{

    const {oncedata,checkBed} = props
    return(
        <div className="caption">

            <div className="caption-title"><h2>{oncedata&&oncedata.room[0].name}</h2></div>
            <div className="caption-center"><span>{oncedata&&oncedata.room[0].description}</span></div>
            <div className="caption-footer">
                {oncedata&&(
                    <>
                        {/*{oncedata.room[0].descriptionShort.GuestMin}-{oncedata.room[0].descriptionShort.GuestMax}*/}
                        <p>房客人數限制：
                            {
                                oncedata.room[0].descriptionShort.GuestMin==oncedata.room[0].descriptionShort.GuestMax?oncedata.room[0].descriptionShort.GuestMin:oncedata.room[0].descriptionShort.GuestMin+'-'+oncedata.room[0].descriptionShort.GuestMax
                            }
                            人</p>
                        <p>床型：{
                            oncedata.room[0].descriptionShort.Bed.map((item,index)=>{
                                if(index!=oncedata.room[0].descriptionShort.Bed.length-1){
                                    return checkBed(item)+'/'
                                }
                                else{
                                    return checkBed(item)
                                }

                            })
                        }</p>
                        <p>衛浴數量：{oncedata.room[0].descriptionShort['Private-Bath']}間</p>
                        <p>房間大小：{oncedata.room[0].descriptionShort.Footage}平方公尺</p>
                        <p>checkIn 時間：{oncedata.room[0].checkInAndOut.checkInEarly}~{oncedata.room[0].checkInAndOut.checkInLate}</p>
                        <p>checkOut 時間：{oncedata.room[0].checkInAndOut.checkOut}</p>
                        <br/>
                    </>
                )}

            </div>
        </div>
    )
}