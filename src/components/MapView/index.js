import React from 'react';
import MapView from 'react-native-maps';
import { heightToDp } from '../../utils/Dimensions';

const DATA = [
  {
    title: 'Millineum Mall',
    description: 'this is millineum mall karachi',
    lat: 31.5497,
    long: 73.3436,
    img: require('../../assets/logo2.png'),
  },
  {
    title: 'My Location',
    description: 'Current Loccation',
    lat: 31.5497,
    long: 73.3436,
    img: require('../../assets/logo2.png'),
  },
];

const Map = ({
  data = DATA,
  onPress = () => {},
  intialRegion = { latitude: 31.5497, longitude: 74.3436, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
}) => {
  const map_style = [
    {
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
  ];

  return (
    <MapView initialRegion={intialRegion} style={{ height: heightToDp(50) }} customMapStyle={map_style}>
      {data?.map((item, index) => {
        return (
          <MapView.Marker
            key={index}
            coordinate={{ latitude: item.lat, longitude: item.long }}
            title={item?.title}
            description={item?.description}
            image={item?.img}
            onPress={onPress}>
            {/* <MapView.Callout tooltip onPress={() => setModalVisible(true)} /> */}
          </MapView.Marker>
        );
      })}
    </MapView>
  );
};

export default Map;
