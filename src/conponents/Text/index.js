import React from 'react'
import './index.less'
import {Link} from "react-router-dom";
export const Text = (props) =>{

    const {children,className} = props
    return(
        <div className={`textStyle ${className}`}>
            <Link to='/' className='indexLink'>
                 <h1><span>{children}</span></h1>
            </Link>
        </div>

    )
}
