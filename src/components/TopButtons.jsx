import React from 'react';

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: 'New York',
    },
    {
      id: 2,
      title: 'Tokyo',
    },
    {
      id: 3,
      title: 'Manila',
    },
    {
      id: 4,
      title: 'Toronto',
    },
    {
      id: 5,
      title: 'London',
    },
  ];

  return (
    <div className="flex justify-evenly gap-x-4">
      {cities.map((city) => (
        <button
          key={city.id}
          className="font-medium text-white text-md"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
