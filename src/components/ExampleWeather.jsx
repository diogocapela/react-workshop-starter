import React, { useState } from 'react';

function ExampleWeather() {
  const [weatherData, setWeatherData] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [hasError, setHasError] = useState(false);

  const [text, setText] = useState('Porto');

  const fetchWeather = async () => {
    setHasError(false);
    setIsLoading(true);
    try {
      const response = await fetch(`https://diogocapela.com/api/proxy/goweather.herokuapp.com/weather/${text}`);
      const data = await response.json();

      setWeatherData(data);
    } catch (error) {
      console.log(error);
      setHasError(true);
    }
    setIsLoading(false);
  };

  return (
    <div style={{ background: 'lightgrey', padding: '15px' }}>
      <p>Example Weather</p>

      <input value={text} onChange={(event) => setText(event.target.value)} />

      <button onClick={fetchWeather}>Fetch Weather</button>

      {hasError && <p style={{ color: 'red' }}>Whoops, something went wrong!</p>}

      {isLoading && <p>Loading...</p>}

      {weatherData && !hasError && !isLoading && (
        <p>
          <b>Description:</b> {weatherData.description}
          <br />
          <b>Temperature:</b> {weatherData.temperature}
          <br />
          <b>Wind:</b> {weatherData.wind}
        </p>
      )}
    </div>
  );
}

export default ExampleWeather;
