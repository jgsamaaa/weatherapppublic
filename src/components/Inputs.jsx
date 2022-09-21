import React, { useState } from 'react';
import { UilSearch } from '@iconscout/react-unicons';
import { UilLocationPoint } from '@iconscout/react-unicons';

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState('');

  // Converting Celsius to Fahrenheit
  const handleUnitChange = (e) => {
    const selectedUnits = e.currentTarget.name;

    if (units !== selectedUnits) setUnits(selectedUnits);
  };

  //  NOTE When user click the seach icon
  const handleSeachClick = (event) => {
    if (city !== '') setQuery({ q: city });
  };

  // NOTE Enter button on keydown
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setQuery({ q: city });
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row items-center justify-center w-3/4 space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          onKeyDown={handleKeyDown}
          className="w-full p-2 text-xl font-light capitalize focus:outline-none placeholder:lowercase"
          placeholder="search for city..."
        />

        <UilSearch
          size={25}
          className="text-white transition ease-out cursor-pointer hover:scale-125"
          onClick={handleSeachClick}
        />

        <UilLocationPoint
          size={25}
          className="text-white transition ease-out cursor-pointer hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>

      <div className="flex flex-row items-center justify-center w-1/4">
        <button
          name="metric"
          className="text-xl font-light text-white transition ease-out hover:scale-125"
          onClick={handleUnitChange}
        >
          °C
        </button>
        <p className="mx-2 text-xl text-white">|</p>
        <button
          name="imperial"
          className="text-xl font-light text-white transition ease-out hover:scale-125"
          onClick={handleUnitChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
