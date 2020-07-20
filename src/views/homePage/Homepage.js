import React from 'react'
import "./index.less"

export default class HomePage extends React.Component{
    api = () =>{
        let Ajax = new XMLHttpRequest
        Ajax.open('get','https://google.com',true)
        Ajax.send()
        Ajax.onreadystatechange = function(){
                    console.log(Ajax.response);

        }
    }
    render() {
        this.api()
        return (
            <div className='homepage'>
                123456
            </div>
        )
    }

}

