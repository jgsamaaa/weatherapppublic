import { useEffect, useState } from 'react';

import Forecast from './components/Forecast';
import Header from './components/Header';
import Inputs from './components/Inputs';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import TimeAndLocation from './components/TimeAndLocation';

import TopButtons from './components/TopButtons';
import getFormattedWeatherData from './services/weatherService';

function App() {
  const [query, setQuery] = useState({ q: 'denver' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  // Refresh every time i fetch new unit
  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className=" bg-slate-900">
      <div className="max-w-screen-md px-10 py-5 pt-4 mx-auto shadow-xl sm:h-full md:h-screen md:px-32 bg-gradient-to-br shadow-gray-400 from-cyan-500 to-blue-900">
        <Header />
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        {weather && (
          <div>
            <TimeAndLocation weather={weather} />
            <TemperatureAndDetails weather={weather} />
            <Forecast title="hourly forecast" items={weather.hourly} />
            <Forecast title="daily forecast" items={weather.daily} />{' '}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
