interface Weather {
  weather: [
    {
      id: number;
      description: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  name: string;
  sys: {
    country: string;
  };
}

export const initialState: Weather = {
  weather: [
    {
      id: 0,
      description: "",
    },
  ],
  base: "",
  main: {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    humidity: 0,
  },
  name: "",
  sys: {
    country: "",
  },
};

export default Weather;
