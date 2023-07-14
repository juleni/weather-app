import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=72285a45a8bcf47b8b7221e26f281fa0`;

  const searchLocation = (event) => {
    if (errorMsg.length > 0) setErrorMsg("");
    if (event.key === "Enter" && location.trim().length > 0) {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          setErrorMsg(`Location "${location}" was not found`);
          console.log(errorMsg);
        });
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter location"
        />
      </div>
      <div className="message">{errorMsg}</div>
      <div className="container">
        <div className="top">
          <div className="location">{data.name}</div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()} &deg;C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()} &deg;C</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? (
                <p className="bold">{data.main.humidity} %</p>
              ) : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} km/h</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
