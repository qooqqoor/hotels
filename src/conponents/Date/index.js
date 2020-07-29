import React from "react";
import "./index.less"
import * as Time from "../../conponents/Time"

export  class Date extends React.Component{


    constructor(props) {
        super(props);
        const {dateboxdate} = this.props

        const dayArray=Time.MonthDay(dateboxdate)


        this.state={
            dateboxdate:dateboxdate,
            dateboxdateCopy:dateboxdate,
            totalday:Time.Totalday(dateboxdate),
            dayArray:dayArray

        }
    }
    setDatebox2date = (date) =>{
        const {setDateboxdate} = this.props
        const dat = Time.Year(this.state.dateboxdateCopy)+'/' + (Time.Month(this.state.dateboxdateCopy)+1)+'/'+ date
        setDateboxdate(dat)

    }

    steMonthAdd =  () => {


        this.state.dateboxdateCopy.setMonth(Time.Month(this.state.dateboxdateCopy)+1,1)

        this.setState({
            dateboxdateCopy:this.state.dateboxdateCopy,
            totalday:Time.Totalday(this.state.dateboxdateCopy),
            dayArray:Time.MonthDay(this.state.dateboxdateCopy)
        })

    }

    steMonthMinus =  () => {


        this.state.dateboxdateCopy.setMonth(Time.Month(this.state.dateboxdateCopy)-1,1)



        this.setState({
            dateboxdateCopy:this.state.dateboxdateCopy,
            totalday:Time.Totalday(this.state.dateboxdateCopy),
            dayArray:Time.MonthDay(this.state.dateboxdateCopy)
        })

    }

    SetDatebox1= async (e)=>{
        const {setDatebox1} = this.props
        setDatebox1()

    }

    componentDidMount() {

        const aaa = Time.Setday(this.state.dateboxdate)


    }
    componentDidUpdate(prevProps, prevState, snapshot) {

        const {dateboxdate} = this.props
        if(prevProps.dateboxdate!=dateboxdate){
            this.setState({
                dateboxdateCopy:Time.Setday(dateboxdate)
            })
        }
    }


    render(){
        const {className,inputBox,datebox,dateboxcheck}=this.props



        //１月：January〔`d3ænjU,εrI〕===Jan
        // ２月：February〔`fεbrU,εrI〕===Feb
        // ３月：March 〔mart∫〕===Mar
        // ４月：April〔`epr∂l〕===Apr
        // ５月： May 〔me〕===May
        // ６月：June〔d3un〕===Jun
        // ７月： July〔d3u`laI〕=== Jul
        // ８月： August〔`)∂gst〕===Aug
        // ９月： September〔sεp`tεmb ∂v〕===Sep
        // １０月： October〔ak`tob ∂v〕===Oct
        // １１月：November〔no`vεmb ∂v〕===Nov
        // １２月：December〔dI`sεmb ∂v〕 ===Dec

        //dateboxdate.setMonth(Time.Month(dateboxdate)+2,1)
            //console.log((this.state.dateboxdateCopy)+'/'+(this.state.dateboxdate))
        //console.log((this.state.totalday))
        return(
            <>
                <input className={className} type="text"
                       onFocus={(e)=>{this.SetDatebox1(e)}}
                       onClick={(e)=>e.stopPropagation()}
                       value={dateboxcheck}
                />


                {
                    datebox&&(
                        <>
                            <div className='data-box' onClick={(e)=>e.stopPropagation()}>
                                {
                                    inputBox=='RepeatGrid1'&&<img src={require('../../assets/img/RepeatGrid1.svg')} alt=""/>
                                }
                                {
                                    inputBox=='Union1'&&<img src={require('../../assets/img/Union1.svg')} alt=""/>
                                }

                                <div className="datelist">
                                    <div className="date-title">
                                        <img src={require('../../assets/img/left.svg')} alt=""  onClick={()=>this.steMonthMinus()}/>
                                        <p>{Time.Year(this.state.dateboxdateCopy)} / {Time.Month(this.state.dateboxdateCopy)+1}</p>
                                        <img src={require('../../assets/img/right.svg')} alt="" onClick={()=>this.steMonthAdd()}/>
                                    </div>
                                    <div className="date-center">
                                        <div className="date-center-table">
                                            <div>MON</div>
                                            <div>TUE</div>
                                            <div>WED</div>
                                            <div>THU</div>
                                            <div>FRI</div>
                                            <div className='bord'>SAT</div>
                                            <div className='bord'>SUN</div>

                                            {
                                                this.state.dayArray.map((item,index)=>{
                                                    if(item!=0){
                                                        // return <div key={index}>{item}</div>'
                                                        if(index==5||index==6||index==12||index==13||index==19||index==20||index==26||index==27||index==33||index==34){
                                                            return <div key={index} className={`bord dadd`} onClick={()=>this.setDatebox2date(item)}>{item}</div>
                                                        }
                                                        else{
                                                            return <div key={index} className={`dadd`} onClick={()=>this.setDatebox2date(item)}>{item}</div>
                                                        }
                                                    }
                                                    else{
                                                        return <div key={index}></div>
                                                    }
                                                })
                                            }


                                        </div>

                                    </div>
                                </div>

                            </div>
                        </>
                    )
                }

            </>

        )
    }

}

