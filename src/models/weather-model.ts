interface IWeather {
  weather: [
    {
      id: number;
      description: string;
      icon: string;
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
  wind: {
    speed: number;
  };
}

export enum WeatherConditions {
  "01" = "clear",
  "02" = "few-clouds",
  "03" = "scattered-clouds",
  "04" = "broken-clouds",
  "09" = "shower-rain",
  "010" = "rain",
  "011" = "thunderstorm",
  "013" = "snow",
  "050" = "mist",
}

export const initialState: IWeather = {
  weather: [
    {
      id: 0,
      description: "",
      icon: "",
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
  wind: {
    speed: 0,
  },
};

export default IWeather;
