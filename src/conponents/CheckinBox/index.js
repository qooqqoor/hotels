import React from "react";
import "./index.less"
import {GaryBtn} from "../GaryBtn"
import * as Time from "../../conponents/Time"
export const CheckinBox = (props) =>{
    const {oncedata,setCheckinBox,dateboxcheck1,dateboxcheck2}=props
    return(
        <div className="check-bg">
            <div className="check-box">
                {oncedata&&(
                    <>
                        <div className="check-box-title">{oncedata.room[0].name}</div>
                        <div className="check-box-center">
                            <div className="check-box-center-title">
                                <div>
                                    <div className='border-gray'>入住</div><p>{dateboxcheck1} 星期三（15:00 起）</p>
                                </div>
                                <div>
                                    <div className='border-gray'>退房</div><p>{dateboxcheck2} 星期五（10:00 前）</p>
                                </div>
                            </div>
                            <div className="check-box-center-total">
                                3晚 / 4260元
                            </div>

                        </div>
                        <div className="check-box-btn">
                            <GaryBtn>確定</GaryBtn>
                        </div>

                        <div className='check-colse-btn' onClick={setCheckinBox}/>
                    </>
                )}

            </div>

        </div>
    )
}