const baseUrl = 'https://api.weatherbit.io/v2.0/forecast/daily';

const key = 'db89dacdc3034d92b95b9b5ace129bed';

const formatDataForChart = async (weatherData) => {
  const formattedTemp = [];
  const formattedDates = [];

  weatherData.map((obj) => {
    console.log(obj.temp);
    formattedTemp.push(obj.temp);
    formattedDates.push(obj.valid_date);
    return null;
  });

  return {
    dates: formattedDates,
    temps: formattedTemp,
  };
};

export const getDefaultWeatherHistory = async (lat, lon, unit) => {
  try {
    const resp = await fetch(
      `${baseUrl}?lat=${lat}&lon=${lon}&units=${unit}&key=${key}`,
    );

    const data = await resp.json();
    console.log(data);
    return formatDataForChart(data.data);
  } catch (e) {
    return console.log(e);
  }
};

export const getForecast = () => {};
