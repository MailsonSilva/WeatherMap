import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
`;

export const DateContainer = styled.View`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const WeatherIcon = styled.Image`
  width: 90px;
  height: 100px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 15px;
`;

export const Temperature = styled.View`
  border-width: 4px;
  border-radius: 10px;
  border-color: #dcdde1;
  background-color: #487eb0;
  height: 100px;
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transform: translateY(-15px);
`;

export const Value = styled.Text`
  color: #fff;
  font-size: 70px;
`;

export const Measure = styled.Text`
  color: #fff;
  font-size: 30px;
  transform: translateY(-15px);
`;

export const LocationContainer = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Location = styled.Text`
  color: white;
  font-size: 20px;
  margin: 0px;
`;

export const TextMinMax = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;

export const Text = styled.Text`
  color: white;
  font-size: 20px;
  padding: 5px;
`;
