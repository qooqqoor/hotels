import React from 'react'
import "./index.less"
import { getHotels } from "../../service/callAPI"
import {Text} from "../../conponents/Text"
export default class HomePage extends React.Component{

    state={
        data:""
    }

    successHotels = async () => {

      const { success,items} =   await getHotels('allHotels');
        console.log(items)
        return items
        // if(success){
        //     this.setState({
        //         allhotels:items[0].id
        //     })
        // }


        // this.setState({
        //     allhotels : allhotels.items[0].id
        // })

    }
    componentDidMount=async() =>{
        const data = await this.successHotels()
        this.setState({
            data:data
        })
    }

    render() {

        const data = this.state.data

        return (
            <div className='homepages'>



                <Text className="title">Radish</Text>
                <div className="hotelsboxs">

                    {
                        data.length>0?(
                            <>
                                {
                                    data.map(item => {
                                        return(
                                            <div className="hotexbox" key={item.id}>
                                                <div className="hotexbox-img">
                                                    <div  style={{'backgroundImage':`url("${item.imageUrl}")`}} alt=""/>
                                                </div>

                                                <div className="hotexbox-text">
                                                    <span>{item.name}</span>
                                                    <span>$ {item.normalDayPrice}</span>
                                                    <span>$ {item.holidayPrice}</span>
                                                </div>
                                            </div>
                                        )

                                    })
                                }
                            </>
                        ):''

                    }

                </div>
                <div className="footer">
                    <div className="footer-box">
                        <div className="address"><i className="ic ic-address"/><span>台中市西屯區市政路588號豐邑大樓</span></div>
                        <div className="phone"><i className="ic ic-phone"/><span>04-22541496-19</span></div>
                        <div className="mail"><i className="ic ic-mail"/><span>ada.lew@link8tech.tw</span></div>
                    </div>
                </div>
            </div>
        )
    }

}

