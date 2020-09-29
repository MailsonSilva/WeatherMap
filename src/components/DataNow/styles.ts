import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const WeatherIcon = styled.Image`
  width: 90px;
  height: 90px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 20px;
`;

export const Temperature = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Value = styled.Text`
  color: #fff;
  font-size: 70px;
`;

export const Measure = styled.Text`
  color: #fff;
  font-size: 32px;
  transform: translateY(-15px);
`;
