import React from "react";
import "./index.less"
import {Link} from "react-router-dom"
export const Texttitle = (props) =>{

    const {alldata,oncedata,changeTitle} = props
    return(
        <div className="text-title">

            {alldata&&alldata.length>0&&(

                alldata.map(item=>{
                    if(oncedata!=item.name){
                        return(
                            <Link
                                key={item.id}
                                to={{
                                    pathname:'/room/'+item.id,

                                }}
                                className="text-p"
                                onClick={()=>changeTitle(item.id)}
                            >
                                <p  key={item.id}>{item.name}</p>
                            </Link>
                        )
                    }

                })
            )}

        </div>
    )
}