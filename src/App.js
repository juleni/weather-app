function App() {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Zvolen&appid=72285a45a8bcf47b8b7221e26f281fa0";

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">Porto</div>
          <div className="temp">
            <h1>25&deg;C</h1>
          </div>
          <div className="description">
            <p>Cloudy</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">25&deg;C</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">25 km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
