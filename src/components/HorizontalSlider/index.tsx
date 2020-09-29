import React, {useState, useEffect} from 'react';
import {Safe, Container, Card, Hour, Temperature, WeatherIcon} from './styles';
import {kelvinToCelcius, normalizeDate} from '../../utils/Converter';

import IWeatherResponse from '../../global/IWeatherResponse';
import IDaily from '../../global/IDaily';

interface IHorizontalSlider {
  weather: IWeatherResponse;
}

const HorizontalSlider: React.FC<IHorizontalSlider> = ({weather}) => {
  const [daily, setDaily] = useState<IDaily[]>();

  useEffect(() => {
    setDaily(weather.daily);
  }, [weather]);

  return (
    !!weather && (
      <Safe>
        <Container showsVerticalScrollIndicator={false}>
          {!!daily &&
            daily.map((day) => (
              <Card key={day.dt.toString()}>
                <Hour>{normalizeDate(day.dt)}</Hour>

                <WeatherIcon
                  source={{
                    uri: `http://openweathermap.org/img/wn/${day.weather[0].icon}.png`,
                  }}
                />

                <Temperature>{'Max ' + kelvinToCelcius(day.temp.max)}°C</Temperature>
                <Temperature>{'Min ' +kelvinToCelcius(day.temp.min)}°C</Temperature>
              </Card>
            ))}
        </Container>
      </Safe>
    )
  );
};

export default HorizontalSlider;
