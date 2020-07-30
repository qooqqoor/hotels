import React from 'react'

import {getHotels,checkHotels} from "../../service/callAPI";
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
        this.Name = React.createRef();
        this.Phone = React.createRef();
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
        dateboxlist:'',
        booking:'',
    }

    onceHotels = async (id) => {

        const  items =   await getHotels('onceHotels',id);
        const  allitems =   await getHotels('allHotels');

        return {items,allitems}



    }
    setDatebox1date=   (item)=>{
        (Time.Setday(this.state.dateboxcheck2)<Time.Setday(item))&&this.setState({datebox2date:item,dateboxcheck2:item})
        !this.state.dateboxcheck2&&this.setState({datebox2date:item})
        //const settime =  (Time.Setday(this.state.dateboxcheck1)<Time.Setday(this.state.dateboxcheck2))?this.state.dateboxcheck1:this.state.dateboxcheck
        const mapList = Time.TimeList(item,this.state.dateboxcheck2)
        const booking = this.state.booking
        let setsave = true


        for(const item of mapList){
            for(const bokk of booking){
                if(item==bokk){
                    alert('預約期間已有其他預約，請更改時間！')
                    setsave = false

                    this.setState({
                        datebox2date:item,
                        dateboxcheck2:'',
                        datebox1date:item,
                        dateboxcheck1:'',
                        dateboxlist: ''



                    },()=> {


                        this.setState({
                            dateboxlist: Time.TimeList(this.state.dateboxcheck1, this.state.dateboxcheck2)
                        })
                    })

                    return
                }

            }
        }


        setsave&&this.setState({

            datebox1date:item,
            dateboxcheck1:item,
            datebox1:false,
            datebox2:false,

        },()=>{
             this.setState({
                 dateboxlist:Time.TimeList(this.state.dateboxcheck1,this.state.dateboxcheck2)
             })
         })




    }
    setDatebox2date= async (item)=>{
        //const cc = await (Time.Setday(this.state.dateboxcheck1)>Time.Setday(item))?this.state.dateboxcheck1:item

        const mapList = Time.TimeList(this.state.dateboxcheck1,item)
        const booking = this.state.booking
        let setsave = true


        for(const item of mapList){
            for(const bokk of booking){
                if(item==bokk){
                    alert('預約期間已有其他預約，請更改時間！')
                    setsave = false
                    this.setState({
                        datebox2date:item,
                        dateboxcheck2:'',
                        datebox1date:item,
                        dateboxcheck1:'',
                        dateboxlist: ''


                    })


                    return
                }

            }
        }

        setsave&&this.setState({
            datebox2date:item,
            dateboxcheck2:item,
            datebox1:false,
            datebox2:false,

        },()=>{



             this.setState({
                 dateboxlist:Time.TimeList(this.state.dateboxcheck1,this.state.dateboxcheck2)
             })
         })


        //Time.TimeList(this.state.dateboxcheck1,this.state.dateboxcheck2)
    }
    setCheckinBox=()=>{
        this.setState({
            checkinBox:false,
        })
    }
    changeTitleImage=(item)=>{
        //console.log(item)
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
        // /console.log(this.Name.current.value)
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

    parameSubmit=async ()=>{
        this.setState({
            checkinBox:false,
            loading:false
        })
        const params = {
            name:this.state.speciesName,
            tel:this.state.speciesPhone,
            date:this.state.dateboxlist,
        }
        const {success} = await  checkHotels(this.props.match.params.id,params)


        console.log(success)

        success&&alert('預約成功！')
        window.history.go(0)



    }

    componentDidMount=async() =>{
        let roomid = this.props.match.params.id
        const {items,allitems} = await this.onceHotels(roomid)
        //console.log(this.props.match.params.id)
        //match.params.id
        this.setState({
            loading:true,
            oncedata:items,
            titleImage:items.room[0].imageUrl[0],
            alldatas : allitems.items,

        },()=>{
            const booking  = (
                this.state.oncedata.booking.map((item)=>{
                    return item.date
                })
            )
            this.setState({
                booking:booking
            })
        })
    }


    render() {



        const loading = this.state.loading
        const alldata = this.state.alldatas
        const oncedata = this.state.oncedata

        //console.log(oncedata)
        //console.log('datebox2date='+this.state.datebox2date)

        const dateboxcheck2add = Time.Setday(this.state.dateboxcheck2)

        dateboxcheck2add.setDate(dateboxcheck2add.getDate()+1)

        const dateboxcheck1add = Time.Setday(this.state.dateboxcheck1)

        dateboxcheck1add.setDate(dateboxcheck1add.getDate()+1)

        console.log(dateboxcheck2add)
        const enddateboxcheck1add = Time.Year(dateboxcheck1add)+'/'+(Time.Month(dateboxcheck1add)+1)+'/'+(Time.thisDate(dateboxcheck1add))
        const enddateboxcheck2add = Time.Year(dateboxcheck2add)+'/'+(Time.Month(dateboxcheck2add)+1)+'/'+(Time.thisDate(dateboxcheck2add))

        return (
            <>

                        <div className="room" onClick={()=>(this.state.datebox1||this.state.datebox2)&&this.setDatebox1(false,false)}>
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
                                    dateboxcheck1={enddateboxcheck1add}
                                    dateboxcheck2={enddateboxcheck2add}
                                    checkInEarly={oncedata.room[0].checkInAndOut.checkInEarly}
                                    checkOut={oncedata.room[0].checkInAndOut.checkOut}
                                    normalDayPrice={oncedata&&oncedata.room[0].normalDayPrice}
                                    holidayPrice={oncedata&&oncedata.room[0].holidayPrice}
                                    parameSubmit={this.parameSubmit}

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
                                                    ref = {this.Name}
                                                />
                                                <input
                                                    className={`species-input ${this.state.speciesPhone?'':'species-phone'}`}
                                                    type="text"
                                                    onKeyUp={(e)=>this.setPhoneValue(e)}
                                                    ref = {this.Phone}
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
                                                        afterdate={(Time.today())}
                                                        dateboxlist={this.state.dateboxlist}
                                                        booking={this.state.booking}
                                                    />
                                                    <Date
                                                        className={`${!this.state.dateboxcheck2&&'date-end'}`}
                                                        inputBox='Union1'
                                                        datebox={this.state.datebox2}
                                                        dateboxdate = {Time.Setday(this.state.datebox2date)}
                                                        setDatebox1={()=>this.setDatebox1(false,true)}
                                                        setDateboxdate={this.setDatebox2date}
                                                        dateboxcheck={this.state.dateboxcheck2}
                                                        afterdate={this.state.dateboxcheck1?this.state.dateboxcheck1:Time.today()}
                                                        dateboxlist={this.state.dateboxlist}
                                                        booking={this.state.booking}
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

