import React from 'react'
import "./index.less"
import { getHotels } from "../../service/callAPI"
import {Text} from "../../conponents/Text"

import {Loading} from "../../conponents/Loading"
import {Footer} from "../../conponents/Footer"
import {Hotelsboxs} from  "../../conponents/Hotelsboxs"
export default class HomePage extends React.Component{

    state={
        data:"",
        loading:false,
    }

    successHotels = async () => {

      const { items} =   await getHotels('allHotels');
      this.setState({
          loading:true,
      })
        return items

    }
    componentDidMount=async() =>{
        const data = await this.successHotels()
        this.setState({
            data:data
        })
    }

    render() {

        const data = this.state.data
        const loading = this.state.loading

        return (
            <>

                        <div className='homepages'>

                            <Text className="title">WHITE  INN</Text>
                            {
                                loading?'':<Loading/>
                            }
                            <Hotelsboxs
                                data={data}
                            />
                            <div className="footer">
                                <Footer/>
                            </div>
                        </div>


            </>
        )
    }

}

