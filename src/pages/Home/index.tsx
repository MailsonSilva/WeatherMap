import React, {useState, useEffect} from 'react';
import {Marker} from 'react-native-maps';
import {Alert,ActivityIndicator} from 'react-native';
import * as Location from 'expo-location';
import api from '../../services/api';
import IWeatherResponse from '../../global/IWeatherResponse';
import api_key from '../../../config_keys';

import {
  Container,
  ViewMap,
  Map,
  InfoLocation,
  ViewIndicator,
  IconRefresh,
  ButtonRefresh
} from './styles';
import DataNow from '../../components/DataNow';


const Home: React.FC = () => {
  const [location, setLocation] = useState<[number, number]>([0,0]);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState<IWeatherResponse | null>();

  useEffect(() => {
    loadPosition();
  }, []);

  const loadPosition = async() => {
    const { status } = await Location.requestPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Precisamos da sua permissão para obter a localização"
      );
      return;
    }

    const location = Location.getCurrentPositionAsync();
    const { latitude, longitude } = (await location).coords;
    setLocation([latitude, longitude]);
    setLoading(false);
    Weather(latitude, longitude);
  }

  const Weather = (lat: number, long: number) => {
    api
      .get<IWeatherResponse | null>(
        `/onecall?lat=${lat}&lon=${long}&appid=${api_key}`,
      )
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        Alert.alert('Location error', `${(error.code, error.message)}`);
      });
  }

  const newLocation = (lat: number, long: number) =>{
    setLocation([lat, long]);
    Weather(lat, long);
  }

  return (
    loading ? (
      <ViewIndicator>
        <ActivityIndicator size="large" />
      </ViewIndicator>
    ) : (
      <Container>
      {location[0] !== 0 && (
        <>
          <ViewMap>
            <Map
            initialRegion={{
              latitude: location[0],
              longitude: location[1],
              latitudeDelta: 25.000,
              longitudeDelta: 25.000,
            }}
            onPress={e => newLocation(
              e.nativeEvent.coordinate.latitude,
              e.nativeEvent.coordinate.longitude
            )}>

            <Marker
              coordinate={{
                latitude: location[0],
                longitude: location[1],
              }}
            />
            </Map>
          </ViewMap>

          <ButtonRefresh
            onPress={() => {
              loadPosition();
            }}
          >
            <IconRefresh name="refresh-cw" size={25}/>
          </ButtonRefresh>

          <InfoLocation>
            <DataNow weather={weather} location={location} />
          </InfoLocation>
        </>
      )}
      </Container>
    )
  );
}

export default Home;
