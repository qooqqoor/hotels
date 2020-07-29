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


