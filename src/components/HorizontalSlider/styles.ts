import styled from 'styled-components/native';

export const Safe = styled.SafeAreaView`
flex: 1;
`;

export const Container = styled.ScrollView`
  margin: 5px;
`;

export const Card = styled.View`
  border: 2px solid white;
  border-radius: 8px;
  padding: 10px;
  margin: 6px;
  align-items: center;
`;

export const Hour = styled.Text`
  color: #fff;
`;

export const Temperature = styled.Text`
  color: white;
`;

export const WeatherIcon = styled.Image`
  width: 50px;
  height: 50px;
`;
