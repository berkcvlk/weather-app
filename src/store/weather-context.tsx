import React, { useCallback, useState } from "react";
import { ICity } from "../models/city-model";
import IWeather, { initialState } from "../models/weather-model";

interface IWeatherContext {
  weatherData: IWeather;
  cityList: ICity[];
  fetchWeatherByCity: (city: string) => void;
  fetchCityList: (city: string) => void;
  resetCityList: () => void;
}

export const WeatherContext = React.createContext<IWeatherContext>({
  weatherData: initialState,
  cityList: [],
  fetchWeatherByCity: (city) => {},
  fetchCityList: (city) => {},
  resetCityList: () => {},
});

const WeatherContextProvider: React.FC = ({ children }) => {
  const [weatherData, setWeatherData] = useState<IWeather>(initialState);
  const [cityList, setCityList] = useState<ICity[]>([]);

  const fetchWeatherByCity = (city: string) => {
    const baseUrl = "https://api.openweathermap.org/data/2.5/";
    const url = `${baseUrl}weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
      });
  };

  const fetchCityList = useCallback((city: string) => {
    fetch("current.city.list.json")
      .then((res) => res.json())
      .then((data) => {
        let filteredArray: ICity[] = [];
        for (const key in data) {
          let searchKey = data[key].name.toLowerCase();
          let cityLower = city.toLowerCase();

          if (searchKey.includes(cityLower)) {
            filteredArray.push({
              id: data[key].id,
              name: data[key].name,
            });
          }
        }
        setCityList(filteredArray);
      });
  }, []);

  const resetCityList = () => {
    setCityList([]);
  };

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        cityList,
        fetchWeatherByCity,
        fetchCityList,
        resetCityList,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
