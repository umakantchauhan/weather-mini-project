import SearchBox from "./searchBox";
import InfoBox from "./infoBox"
import { useState } from "react"

export default function WeatherApp(){

    const [weatherInfo , setWeatherInfo] = useState({
        city : "Delhi",
        feelslike : 3,
        temp : 3,
        tempMin : 3,
        tempMax : 3,
        humidity : 3,
        weather : "haze",
    })

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{textAlign:"center"}}>
        <h1>Weather APP by me</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
    )
}