import React from 'react';
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from '@iconscout/react-unicons';
import { formatToLocalTime, iconUrlFromCode } from '../services/weatherService';

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>

      <div className="flex flex-row items-center justify-between py-3 text-white">
        <img src={iconUrlFromCode(icon)} alt="/" className="w-20" />
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-center text-sm font-light">
            <UilTemperature size={18} className="mr-1" />
            Precipitation :
            <span className="ml-1 font-medium">{`${feels_like.toFixed()}°`}</span>
          </div>

          <div className="flex items-center justify-center text-sm font-light">
            <UilTear size={18} className="mr-1" />
            Humidity :
            <span className="ml-1 font-medium">{`${humidity.toFixed()}%`}</span>
          </div>

          <div className="flex items-center justify-center text-sm font-light">
            <UilWind size={18} className="mr-1" />
            Wind :
            <span className="ml-1 font-medium">{`${speed.toFixed()}km/h`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center py-3 space-x-2 text-sm text-white">
        <UilSun />
        <p className="font-light">
          Rise :
          <span className="font-medium">
            <span> </span>
            {formatToLocalTime(sunrise, timezone, 'hh:mm a')}
          </span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="mr-1 font-light">
          Set :
          <span className="font-medium ">
            <span> </span>
            {formatToLocalTime(sunset, timezone, 'hh:mm a')}
          </span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          High : <span className="font-medium">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          Low : <span className="font-medium">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
