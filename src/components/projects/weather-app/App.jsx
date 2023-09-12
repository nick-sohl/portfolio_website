import React, { useState } from 'react';

const App = () => {
  const googleApiKey = 'AIzaSyCmnp0kkjUyzAmvJF-CV655X9vYB0aRIxI';
  const weatherApiKey = '214daee04b84851a546245da5431d069';

  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async () => {
    try {
      const geoResp = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${googleApiKey}`
      );
      const geoData = await geoResp.json();
      const { lat, lng } = geoData.results[0].geometry.location;

      const weatherResp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${weatherApiKey}&units=metric`
      );
      const weatherData = await weatherResp.json();
      const { name, weather, main } = weatherData;

      const weatherInfo = {
        // location: name,
        description: weather[0].description,
        icon: weather[0].icon,
        temperature: Math.round(main.temp),
      };

      setWeatherData(weatherInfo);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='flex gap-4'>
        <input
          className="input input-bordered input-primary"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter Location"
        />
        <button className='btn btn-primary' onClick={getWeather}>GO</button>
      </div>
        {weatherData && (
          <div className="flex flex-col gap-4 items-center mt-8">
            {/* <h2>{weatherData.location}</h2> */}
            <h3 className='capitalize text-2xl'>{weatherData.description}</h3>
            <h1 className='text-6xl font-bold'>{weatherData.temperature}°C</h1>
            <img
              className='w-[200px]'
              src={`http://openweathermap.org/img/w/${weatherData.icon}.png`}
              alt="Weather Icon"
            />
        </div>
        )}
    </div>
  );
};

export default App;