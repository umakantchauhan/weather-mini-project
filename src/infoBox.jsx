import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}){

    const INIT_URL = "https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg";
    const COLD_URL = "https://images.pexels.com/photos/1529360/pexels-photo-1529360.jpeg";
    const HOT_URL = "https://images.pexels.com/photos/106606/pexels-photo-106606.jpeg";
    const RAIN_URL = "https://images.pexels.com/photos/763398/pexels-photo-763398.jpeg";

    return(
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity>80 ? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      <p>Feels Like = {info.feelslike}&deg;C</p>
                      <p>Temperature = {info.temp}&deg;C</p>
                      <p>Min Temperature = {info.tempMin}</p>
                      <p>Max Temperature = {info.tempMax}</p>
                      <p>Humidity = {info.humidity}</p>
                      <p>The weather can be described as {info.weather} and feels like {info.feelslike}&deg;C</p>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    )
}