import React from 'react';
import IWeatherResponse from '../../global/IWeatherResponse';

import {
  Container,
  Temperature,
  Value,
  Measure,
  WeatherIcon,
  Title
} from './styles';
import { kelvinToCelcius } from '../../utils/Converter';

interface IToday {
  weather: IWeatherResponse;
}

const DataNow: React.FC<IToday> = ({weather}) => {

  return (
    !!weather && (
      <Container>
        <Temperature>
          <WeatherIcon
            source={{
              uri: `http://openweathermap.org/img/wn/${weather.current.weather[0].icon}.png`,
            }}
          />
          <Value>{kelvinToCelcius(weather.current.temp)}</Value>
          <Measure>°C</Measure>
        </Temperature>

        <Title>
          {'Sensação térmica ' + kelvinToCelcius(weather.current.feels_like) + ' °C'}
        </Title>
        <Title>{'Umidade ' + weather.current.humidity + '%'}</Title>
        <Title>{'Vento ' + weather.current.wind_speed + ' km/h'}</Title>
      </Container>
    )
  );
}

export default DataNow;
