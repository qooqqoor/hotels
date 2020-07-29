import React from "react";
import "./index.less"
import {Link} from "react-router-dom"
import {Checkbox} from "../Checkbox";
export const Textfooter = (props) =>{

    const {oncedata} = props
    return(
        <div className="text-footer">
            <div className="first">
                <Checkbox checkimg={oncedata.room[0].amenities["Wi-Fi"]}>
                    wifi
                </Checkbox>
                <Checkbox checkimg={oncedata.room[0].amenities["Room-Service"]}>
                    Room Service
                </Checkbox>
                <Checkbox checkimg={oncedata.room[0].amenities["Refrigerator"]}>
                    冰箱
                </Checkbox>
                <Checkbox checkimg={oncedata.room[0].amenities["Smoke-Free"]}>
                    禁止吸煙
                </Checkbox>
            </div>
            <div className="second">
                <Checkbox checkimg={oncedata.room[0].amenities["Breakfast"]}>
                    早餐
                </Checkbox>
                <Checkbox checkimg={oncedata.room[0].amenities["Television"]}>
                    電話
                </Checkbox>
                <Checkbox checkimg={oncedata.room[0].amenities["Sofa"]}>
                    沙發
                </Checkbox>
                <Checkbox checkimg={oncedata.room[0].amenities["Child-Friendly"]}>
                    適合兒童
                </Checkbox>

            </div>
            <div className="thired">
                <Checkbox checkimg={oncedata.room[0].amenities["Mini-Bar"]}>
                    Mini Bar
                </Checkbox>
                <Checkbox checkimg={oncedata.room[0].amenities["Air-Conditioner"]}>
                    空調
                </Checkbox>
                <Checkbox checkimg={oncedata.room[0].amenities["Great-View"]}>
                    漂亮的視野
                </Checkbox>
                <Checkbox checkimg={oncedata.room[0].amenities["Smoke-Free"]}>
                    寵物攜帶
                </Checkbox>

            </div>

        </div>
    )
}