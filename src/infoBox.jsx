import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./infoBox.css";


export default function InfoBox({Info}){
  const initialurl ="https://plus.unsplash.com/premium_photo-1678066986924-120fdbdf3439?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const Hot_url=
  "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const Cold_url=
  "https://plus.unsplash.com/premium_photo-1672845514825-96db4b24c233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbGR3ZWF0aGVyfGVufDB8fDB8fHww";
  const Rainy_url=
  "https://plus.unsplash.com/premium_photo-1666717576644-5701d3406840?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
return (
<div className="InfoBox">
    <div className="CardContainer">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Info.humidity>80 ? Rainy_url :
               Info.temp>23 ? Hot_url :
                Cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {Info.city} {
          Info.humidity>80 ?
           <ThunderstormIcon style={{color: "darkblue"}}/>
           : Info.temp>23 ? 
           <WbSunnyIcon style={{color: "orange"}}/> 
           : <AcUnitIcon style={{color: "blue"}}/>
        }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature: {Info.temp}°C</p>
          <p>Min Temperature: {Info.temp_min}°C</p>
          <p>Max Temperature: {Info.temp_max}°C</p>
          <p>Humidity: {Info.humidity}%</p>
          <p>The weather can be described as <i> {Info.weather}</i> and feels like {Info.feelsLike}°C.
          </p>
        </Typography>
      </CardContent>
    </Card>
    </div>
</div>
);
}