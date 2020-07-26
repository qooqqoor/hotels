import React from 'react'
import {Link} from "react-router-dom";
import {getHotels} from "../../service/callAPI";
import {Loading} from "../../conponents/Loading";
import {Text} from "../../conponents/Text"
import {RoomImage} from "../../conponents/RoomImage"
import './index.less'


export default class Ringtons extends React.Component{

    state={
        data:'',
        loading:false,
        oncedata:"",
        titleImage:'',
        listImage:'',
        oncedataroom:'',
        alldatas:''
    }

    onceHotels = async (id) => {

        const  items =   await getHotels('onceHotels',id);
        const  allitems =   await getHotels('allHotels');

        return {items,allitems}



    }
    changeTitleImage=(item)=>{
        this.setState({
            titleImage:item,
        })

    }

    changeTitle = async(item) =>{

        await this.setState({
            loading:false
        })
        const {items,allitems} = await this.onceHotels(item)

        await this.setState({
            loading:true,
            oncedata:items,
            titleImage:items.room[0].imageUrl[0],
            listImage:items.room[0].imageUrl,
            oncedataroom:items.room[0].name,
            alldatas : allitems,
        })
    }

    componentDidMount=async() =>{
        let roomid = new URL(window.location.href)
        const {items,allitems} = await this.onceHotels(roomid.searchParams.get('id'))

        this.setState({
            loading:true,
            oncedata:items,
            titleImage:items.room[0].imageUrl[0],
            listImage:items.room[0].imageUrl,
            oncedataroom:items.room[0].name,
            alldatas : allitems,
        })
    }

    render() {



        const loading = this.state.loading
        const titleImage = this.state.titleImage
        const listImage = this.state.listImage
        const alldata = this.state.alldatas.items
        const oncedata = this.state.oncedataroom


        return (
            <>

                        <div className="room">
                                <Text className="title">WHITE  INN</Text>
                            {
                                loading? '':<Loading/>
                            }
                            <div className="body">
                                <RoomImage
                                    titleImage = {titleImage}
                                    listImage = {listImage}
                                    changeTitleImage = {this.changeTitleImage}
                                />
                                <div className="room-text">
                                    <div className="text-title">

                                            {alldata&&alldata.length>0&&(

                                                alldata.map(item=>{
                                                    if(oncedata!=item.name){
                                                        return(
                                                            <Link
                                                                key={item.id}
                                                                to={{
                                                                    pathname:'/room',
                                                                    search:'?id='+item.id,
                                                                }}
                                                                className="text-p"
                                                                onClick={()=>this.changeTitle(item.id)}
                                                            >
                                                                <p  key={item.id}>{item.name}</p>
                                                            </Link>
                                                        )
                                                    }

                                                })
                                            )}

                                    </div>

                                    <div className="text-body">fff</div>
                                    <div className="text-footer">ddd</div>
                                </div>
                            </div>

                        </div>



            </>
        )
    }

}

