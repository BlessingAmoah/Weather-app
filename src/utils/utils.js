
const kelvinToFahrenheit = (temperature) => {
    const fahrenheit = (temperature - 273.15) * 1.8 + 32;
    return fahrenheit.toFixed(2);
  };
  
  const formatDate = (isoDate) => {
    const dateObj = new Date(isoDate);
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric"
    };
    return dateObj.toLocaleDateString("en-US", options);
  };
  
  const convertUnixTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000); 
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); 
  };
  
  const parseForecastData = (forecastData) => {
    return forecastData.list.map(item => {
      return {
        date: formatDate(item.dt_txt),
        temperature: kelvinToFahrenheit(item.main.temp),
        weather: item.weather[0].main,
        description: item.weather[0].description,
        icon: item.weather[0].icon,
        sunrise: convertUnixTimestamp(item.sys.sunrise), 
        sunset: convertUnixTimestamp(item.sys.sunset) 
      };
    });
  };
  
  export { kelvinToFahrenheit, formatDate, convertUnixTimestamp, parseForecastData };
  