import axios from "axios";
import {baseURL,baseURLroom} from '../index'


export const getHotels = (style,id) =>{
    let URL = baseURL
    switch (style) {
        case 'allHotels' ://取得所有房型
            URL = baseURL
            break

        case 'onceHotels' ://取得單一房型
            URL = baseURLroom+'/'+id
            break
    }


    return axios.get(URL)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        });


}

export const checkHotels = (id,param) => {//預約房型
    const URL = baseURLroom+'/'+id
    return axios.post(URL,param)
        .then(function (response) {

            return response.data

        })
        .catch(function (error) {
            console.log(error);
        });


}




export const deleteHotels = () => {//清除所有預約
    return axios.delete(baseURL)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            console.log(error);
        })


}


