import React, { useCallback, useState } from "react";
import { ICity } from "../models/city-model";
import IWeather, { initialState } from "../models/weather-model";

interface IWeatherContext {
  weatherData: IWeather;
  fetchWeatherByCity: (city: string) => void;
  cityList: ICity[];
  getCityList: (city: string) => void;
}

export const WeatherContext = React.createContext<IWeatherContext>({
  weatherData: initialState,
  fetchWeatherByCity: (city: string) => {},
  cityList: [],
  getCityList: (city: string) => {},
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
        console.log(data);
        setWeatherData(data);
      });
  };

  const getCityList = useCallback((city: string) => {
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

  return (
    <WeatherContext.Provider
      value={{ weatherData, fetchWeatherByCity, cityList, getCityList }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
