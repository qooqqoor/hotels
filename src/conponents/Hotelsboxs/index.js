import React from "react";
import "./index.less"
import {Link} from "react-router-dom"
export const Hotelsboxs = (props) =>{

    const {data} = props
    return(
        <div className="hotelsboxs">


            {
                data.length>0?(
                    <>
                        {
                            data.map((item,index) => {
                                return(
                                    <Link
                                        className="hotexbox"
                                        to={{
                                            pathname:`/room/${item.id}`,


                                        }}

                                        key={item.id}
                                        style={{
                                            animationDelay:`${index/5}s`
                                        }}

                                    >
                                        <div className="hotexbox-img">
                                            <div  style={{'backgroundImage':`url("${item.imageUrl}")`}} alt=""/>
                                        </div>

                                        <div className="hotexbox-text">
                                            <span>{item.name}</span>
                                            <span>$ {item.normalDayPrice}</span>
                                            <span>$ {item.holidayPrice}</span>
                                        </div>
                                    </Link>
                                )

                            })
                        }
                    </>
                ):''

            }

        </div>
    )
}