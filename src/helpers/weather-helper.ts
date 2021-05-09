export const getWeatherCondition = (con: string): string => {
  switch (con) {
    case "01":
      return "clear";
    case "02":
      return "few-clouds";
    case "03":
    case "04":
      return "broken-clouds";
    case "09":
    case "10":
      return "rain";
    case "11":
      return "thunderstorm";
    case "13":
      return "snow";
    case "50":
      return "mist";
    default:
      return "";
  }
};
