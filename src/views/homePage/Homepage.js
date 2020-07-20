import React from 'react'
import "./index.less"
import { getHotels } from "../../service/callAPI"
import {Text} from "../../conponents/Text"
export default class HomePage extends React.Component{



    successHotels = async () => {

      const { success} =   await getHotels();
        console.log(success)
        // if(success){
        //     this.setState({
        //         allhotels:items[0].id
        //     })
        // }


        // this.setState({
        //     allhotels : allhotels.items[0].id
        // })

    }
    componentDidMount() {
        //this.successHotels()
    }

    render() {


        return (
            <div className='homepages'>
                <Text className="title">Radish</Text>
                <div className="hotelsboxs">
                    <div className="hotexbox"></div>
                    <div className="hotexbox"></div>
                    <div className="hotexbox"></div>
                    <div className="hotexbox"></div>
                    <div className="hotexbox"></div>
                    <div className="hotexbox"></div>
                </div>
                <div className="footer"></div>
            </div>
        )
    }

}

