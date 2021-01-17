import { WeatherResponseType } from "../../types/types"
import useStyle from "./WeatherDataStyle"

type WeatherDataPropsType = {
    data: WeatherResponseType,
}

const WeatherData: React.FunctionComponent <WeatherDataPropsType> = (props) => {
    
    const s = useStyle ()
    const temperature = Math.floor ((( props.data.main.temp - 273.15) * 9/5) + 32)
    const Celsius = Math.ceil (props.data.main.temp - 273.15)

    return (
        <div>
            <div className = {s.row} >
                <div className = {s.name} >
                    {props.data.name},
                </div>
                <div className = {s.country} >
                    {props.data.sys.country}
                </div>
            </div>
            <div className = {s.weather} >
                {/* @ts-ignore */}
                {props.data.weather[0].main}
            </div>
            <div className = {s.temp} >
                {temperature}°F
            </div>
            <div className = {s.temp} >
                {Celsius}°C
            </div>
        </div>
    )
}

export default WeatherData;