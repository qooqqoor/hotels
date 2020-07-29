import React from 'react'

import {getHotels} from "../../service/callAPI";
import {Loading} from "../../conponents/Loading";
import {Text} from "../../conponents/Text"
import {RoomImage} from "../../conponents/RoomImage"
import {Texttitle} from "../../conponents/Text-title"
import {Textfooter} from "../../conponents/Text-footer"
import {CheckinBox} from "../../conponents/CheckinBox"
import {TextBodyLeft} from "../../conponents/TextBodyLeft"
import {GaryBtn} from "../../conponents/GaryBtn"
import * as Time from "../../conponents/Time"
import {Date} from "../../conponents/Date"
import './index.less'


export default class Ringtons extends React.Component{

    constructor(props) {
        super(props);
    }



    state={
        data:'',
        loading:false,
        oncedata:"",
        titleImage:'',
        listImage:'',
        oncedataroom:'',
        alldatas:'',
        checkinBox:false,
        speciesName:'',
        speciesPhone:'',
        datebox1:false,
        datebox2:false,
        datebox1date:Time.today(),
        datebox2date:Time.today(),
        dateboxcheck1:'',
        dateboxcheck2:'',
    }

    onceHotels = async (id) => {

        const  items =   await getHotels('onceHotels',id);
        const  allitems =   await getHotels('allHotels');

        return {items,allitems}



    }
    setDatebox1date=(item)=>{
        this.setState({
            datebox1date:item,
            dateboxcheck1:item,
            datebox1:false,
            datebox2:false,
        })
    }
    setDatebox2date=(item)=>{
        this.setState({
            datebox2date:item,
            dateboxcheck2:item,
            datebox1:false,
            datebox2:false,
        })
    }
    setCheckinBox=()=>{
        this.setState({
            checkinBox:false,
        })
    }
    changeTitleImage=(item)=>{
        console.log(item)
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
            alldatas : allitems.items,
        })
    }

    checkBed=(item)=>{
        switch(item){
            case "Double":
                return '雙人床'
                break
            case "Single":
                return '單人床'
                break
            case "Queen":
                return '加大床'
                break
            case "Small Double":
                return '小雙人床'
                break
            default:
                return item
                break
        }
    }
    checkinBox = ()=>{
        if(this.state.speciesName==''){
            alert('請輸入姓名！')
        }
        else if(this.state.speciesPhone==''){
            alert('請輸入電話！')
        }
        else if(this.state.dateboxcheck1==''){
            alert('請輸入入住日期！')
        }
        else if(this.state.dateboxcheck2==''){
            alert('請輸入退房日期！')
        }
        else{
            this.setState({
                checkinBox:true
            })
        }



    }
    setTextValue=(e)=>{

        this.setState({
            speciesName:e.target.value
        })
    }
    setPhoneValue=(e)=>{
        this.setState({
            speciesPhone:e.target.value
        })
    }

    setDatebox1=(datebox1,datebox2)=>{
        this.setState({
            datebox1:datebox1,
            datebox2:datebox2,
        })
    }

    componentDidMount=async() =>{
        let roomid = new URL(window.location.href)
        const {items,allitems} = await this.onceHotels(roomid.searchParams.get('id'))

        this.setState({
            loading:true,
            oncedata:items,
            titleImage:items.room[0].imageUrl[0],
            alldatas : allitems.items,

        })
    }

    render() {



        const loading = this.state.loading
        const alldata = this.state.alldatas
        const oncedata = this.state.oncedata
        console.log('datebox1date='+this.state.datebox1date)
        console.log('datebox2date='+this.state.datebox2date)

        return (
            <>

                        <div className="room" onClick={()=>this.setDatebox1(false,false)}>
                                <Text className="title">WHITE  INN</Text>
                            {
                                loading?'':<Loading/>

                            }
                            {
                                this.state.checkinBox&&(
                                <CheckinBox
                                    setCheckinBox={this.setCheckinBox}
                                    oncedata={oncedata&&oncedata}
                                    speciesName={this.state.speciesName}
                                    speciesPhone={this.state.speciesPhone}
                                    dateboxcheck1={this.state.dateboxcheck1}
                                    dateboxcheck2={this.state.dateboxcheck2}

                                />
                                )
                            }
                            <div className="body">
                                <RoomImage
                                    titleImage = {oncedata&&this.state.titleImage}
                                    listImage = {oncedata&&oncedata.room[0].imageUrl}
                                    changeTitleImage = {this.changeTitleImage}
                                />
                                <div className="room-text">
                                    <Texttitle
                                        alldata={alldata}
                                        oncedata={oncedata&&oncedata.room[0].name}
                                        changeTitle={this.changeTitle}
                                    />


                                    <div className="text-body">

                                        <TextBodyLeft
                                            oncedata={oncedata}
                                            checkBed={this.checkBed}
                                        />

                                        <div className="species">
                                            <div className="species-title">
                                                <p>平日(一~四)價格：<span>{oncedata&&oncedata.room[0].normalDayPrice}</span></p>
                                                <p>假日(五~日)價格：<span>{oncedata&&oncedata.room[0].holidayPrice}</span></p>
                                            </div>
                                            <div className="species-bodys">
                                                <input
                                                    className={`species-input ${this.state.speciesName?'':'species-name'}`}
                                                    type="text"
                                                    //value={this.state.speciesName}
                                                    onKeyUp={(e)=>this.setTextValue(e)}
                                                />
                                                <input
                                                    className={`species-input ${this.state.speciesPhone?'':'species-phone'}`}
                                                    type="text"
                                                    onKeyUp={(e)=>this.setPhoneValue(e)}
                                                />
                                                <div className='species-date'>
                                                    <Date
                                                        className={`${!this.state.dateboxcheck1&&'date-start'}`}
                                                        inputBox='RepeatGrid1'
                                                        datebox={this.state.datebox1}
                                                        dateboxdate = {Time.Setday(this.state.datebox1date)}
                                                        setDatebox1={()=>this.setDatebox1(true,false)}
                                                        setDateboxdate={this.setDatebox1date}
                                                        dateboxcheck={this.state.dateboxcheck1}
                                                    />
                                                    <Date
                                                        className={`${!this.state.dateboxcheck2&&'date-end'}`}
                                                        inputBox='Union1'
                                                        datebox={this.state.datebox2}
                                                        dateboxdate = {Time.Setday(this.state.datebox2date)}
                                                        setDatebox1={()=>this.setDatebox1(false,true)}
                                                        setDateboxdate={this.setDatebox2date}
                                                        dateboxcheck={this.state.dateboxcheck2}
                                                    />
                                                </div>
                                            </div>
                                            <div className="species-btn">
                                                <GaryBtn
                                                    onClick={()=>this.checkinBox()}
                                                >
                                                預約
                                                </GaryBtn>



                                            </div>


                                        </div>


                                    </div>

                                    {
                                        oncedata&&(

                                            <Textfooter
                                                oncedata={oncedata}
                                            />
                                        )
                                    }


                                </div>
                            </div>

                        </div>



            </>
        )
    }

}

