import React from "react";

export const today = () =>{
    const data = new Date()
    return data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate()
}

export const Setday = (item) =>{
    const data = new Date(item)
    return data
}

export const Month =(date)=>{
    const mon = date.getMonth()


    return date.getMonth()
}

export const Year =(date)=>{
    return date.getFullYear()
}

export const thisDate =(date)=>{
    return date.getDate()
}

export const Totalday=(date)=>{
    const totalday =  Setday(date)
    totalday.setMonth(totalday.getMonth()+1,0);
    return(totalday.getDate())
}
export const MonthDay=(date)=>{
    let Day =  Setday(date)

    Day.setMonth(Day.getMonth()+1,0);
    const totalday = Totalday(Day)
    Day.setDate(1);
    //console.log('totalday='+Day)
    const dayArray=new Array
    let start = 0;


    for(let a=0;a<42;a++){
        if(a>=Day.getDay()&&start<=totalday){
            start++
        }

        if(start<=totalday){
            dayArray[a]=start
        }



    }
    //console.log(dayArray)
    return(dayArray)
}

export const WeekDay =  (date) =>{
    const listex = Setday(date).getDay()
    const weeks = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
    return weeks[listex]

}


export const Daydays =  (date1,date2) =>{
    const ady = (Setday(date2)-Setday(date1))/(24*60*60*1000)

    return ady

}

export const Dayconst =  (date1,date2,normalDayPrice,holidayPrice) =>{



    const  money = [normalDayPrice,normalDayPrice,normalDayPrice,normalDayPrice,holidayPrice,holidayPrice,normalDayPrice]
    const days = Daydays(date1,date2)
    let firstdayweek =  Setday(date1).getDay()
    let total = 0



    for(let a=0 ; a<days ; a++){
        if(firstdayweek<7){
            //console.log('money[0]='+money[firstdayweek])
            total+=money[firstdayweek]
            firstdayweek++
        }
        else{
            firstdayweek=0
            //console.log('money[0]='+money[firstdayweek])
            total+=money[firstdayweek]
            firstdayweek++
        }


    }
    return total

}
export const strmonyh=(month)=>{
    return (month<10)?('0'+month):month
}

export const TimeList = (date1,date2) =>{

    let day1 = Setday(date1?date1:date2)
    const day2 = Setday(date2?date2:date1)
    let datArray = new Array()

    if(day2>=day1){



        datArray.push(Year(day1)+'-'+strmonyh(Month(day1)+1)+'-'+strmonyh(thisDate(day1)))

        while((Year(day1)+'-'+strmonyh(Month(day1)+1)+'-'+strmonyh(thisDate(day1)))!=(Year(day2)+'-'+strmonyh(Month(day2)+1)+'-'+strmonyh(thisDate(day2)))){



            day1.setDate(thisDate(day1)+1)
            datArray.push(Year(day1)+'-'+strmonyh(Month(day1)+1)+'-'+strmonyh(thisDate(day1)))

        }


    }
    console.log(datArray)
    return datArray



}