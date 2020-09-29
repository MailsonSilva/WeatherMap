import React from 'react';
import {Container} from './styles';
import HorizontalSlider from '../HorizontalSlider';

import IWeatherResponse from '../../global/IWeatherResponse';

interface IDayReport {
  weather: IWeatherResponse;
}

const DayReport: React.FC<IDayReport> = ({weather}) => {
  return (
    !!weather && (
      <Container>
        <HorizontalSlider weather={weather} />
      </Container>
    )
  );
};

export default DayReport;
