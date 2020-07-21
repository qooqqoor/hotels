import React from 'react'
import './index.less'

export const Text = (props) =>{

    const {children,className} = props
    return(
        <div className={`textStyle ${className}`}>
            <span>
                 {children}
            </span>
        </div>

    )
}
