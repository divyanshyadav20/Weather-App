import React from "react";
import { Card } from "react-bootstrap";

const WeatherCard = ({ weatherData }) => {
  const localTime = new Date().getTime();
  const localOffset = new Date().getTimezoneOffset() * 60000;
  const utc = localTime + localOffset;
  let city = utc + 1000 * weatherData.timezone;
  const date = new Date(city);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <Card.Body>
      <Card.Img
        id="image"
        variant="top"
        src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
      />

      <Card.Title>{weatherData.name}</Card.Title>

      <Card.Text>
        <span>Temperature : </span>
        {weatherData.main.temp} &#xb0;C
      </Card.Text>
      <Card.Text>
        <span>Time : </span>
        {date.toLocaleTimeString("en", {
          hour: "numeric",
          minute: "numeric",
        })}
      </Card.Text>
      <Card.Text>
        <span>Day : </span>
        {date.toLocaleDateString("en-IN", { weekday: "long" })}
      </Card.Text>
      <Card.Text>
        <span>Date : </span>
        {date.toLocaleDateString("en-IN", options)}
      </Card.Text>
      <Card.Text>
        <span>Sunrise : </span>
        {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en")}
      </Card.Text>
      <Card.Text>
        <span>Sunset : </span>
        {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en")}
      </Card.Text>
      <Card.Text>
        <span>Description : </span>
        {weatherData.weather[0].description}
      </Card.Text>
      <Card.Text>
        <span>Humidity : </span>
        {weatherData.main.humidity} &#x25;
      </Card.Text>
    </Card.Body>
  );
};

export default WeatherCard;
