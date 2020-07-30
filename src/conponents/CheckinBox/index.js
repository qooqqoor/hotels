import React from "react";
import "./index.less"
import {GaryBtn} from "../GaryBtn"
import * as Time from "../../conponents/Time"
export const CheckinBox = (props) =>{
    const {oncedata,setCheckinBox,dateboxcheck1,dateboxcheck2,checkInEarly,checkOut,normalDayPrice,holidayPrice,parameSubmit}=props

    //console.log(Time.Dayconst(dateboxcheck1,dateboxcheck2,normalDayPrice,holidayPrice))
    return(
        <div className="check-bg">
            <div className="check-box">
                {oncedata&&(
                    <>
                        <div className="check-box-title">{oncedata.room[0].name}</div>
                        <div className="check-box-center">
                            <div className="check-box-center-title">
                                <div>
                                    <div className='border-gray'>入住</div><p>{dateboxcheck1} {Time.WeekDay(dateboxcheck1)}（{checkInEarly} 起）</p>
                                </div>
                                <div>
                                    <div className='border-gray'>退房</div><p>{dateboxcheck2} {Time.WeekDay(dateboxcheck2)}（{checkOut} 前）</p>
                                </div>
                            </div>
                            <div className="check-box-center-total">
                                {Time.Daydays(dateboxcheck1,dateboxcheck2)}晚 / {Time.Dayconst(dateboxcheck1,dateboxcheck2,normalDayPrice,holidayPrice)}元
                            </div>

                        </div>
                        <div className="check-box-btn">
                            <GaryBtn onClick={()=>parameSubmit()}>確定</GaryBtn>
                        </div>

                        <div className='check-colse-btn' onClick={setCheckinBox}/>
                    </>
                )}

            </div>

        </div>
    )
}