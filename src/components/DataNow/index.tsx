import React, {useState, useEffect} from 'react';
import { Text } from 'react-native';
import * as Location from 'expo-location';
import IWeatherResponse from '../../global/IWeatherResponse';
import IGeolocation from '../../global/IGeolocation';
import axios from 'axios';

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
  location: Location.LocationRegion;
}

const DataNow: React.FC<IToday> = ({weather, location}) => {
  const [local, setLocal] = useState<IGeolocation | null>();

  // useEffect(() => {
  //   axios
  //     .get<IGeolocation | null>(
  //       `https://api.opencagedata.com/geocode/v1/json?q=${location.latitude}+${location.longitude}&key=${"efeb9ea37459c8b765f26ceb98ee73b5"}`,
  //     )
  //     .then((response) => {
  //       setLocal(response.data);
  //     });
  // }, [location.latitude, location.longitude]);

  // const date = new Date().toLocaleDateString();

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
        <Title>{'Pressão ' + weather.current.pressure + ' hPa'}</Title>
        <Title>{'Velocidade do vento ' + weather.current.wind_speed + ' km/h'}</Title>


      </Container>
    )
  );
}

export default DataNow;
