import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const ViewIndicator = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ButtonRefresh= styled.TouchableOpacity`
  padding: 4px;
  position: absolute;
  right: 0;
  margin-right: 15px;
  margin-top: 40px;
  border: 1px solid white;
  border-color: #22a6b3;
  border-radius: 3px;
`;

export const IconRefresh = styled(Icon)`
  color: #22a6b3;
`;

export const ViewMap = styled.View`
  width: 100%;
  height: 70%;
`;

export const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const InfoLocation = styled.View`
  flex:1;
  width: 100%;
  flex-direction: row;
  background-color: #4f4e96;
`;


