import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GOOGLE_LOCATION_KEY } from "@env";
import * as Location from "expo-location";
import Geocoder from "react-native-geocoding";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

Geocoder.init(GOOGLE_LOCATION_KEY);

export default function Gmaps({ locationData }) {
  const [currentPosition, setCurrentPosition] = useState({
    latitude: 3,
    longitude: 3,
  });

  // Location.getLastKnownPositionAsync({
  //   accuracy: 6,
  // })
  //   .then((location) => {
  //     setCurrentPosition({
  //       latitude: parseFloat(location.coords.latitude),
  //       longitude: parseFloat(location.coords.longitude),
  //     });
  //   })
  //   .catch((error) => { console.error(error); });

  // console.log(locationData, "from inside Gmaps component");

  let getPosition = {
    lat: 3,
    lng: 3,
  };

  const markers = [
    {
      latitude: 41.74664306640625,
      longitude: 22.17825448583028,
      altitude: 342.2872566739097,
      altitudeAccuracy: 2.4905782322805163,
      title: 'Home',
      subtitle: 'Вељко Влаховиќ 6'
    }
  ];

  if (locationData !== null) {
    getPosition = {
      lat: parseFloat(locationData.coords.latitude),
      lng: parseFloat(locationData.coords.longitude),
    };
  }

  // useEffect(() => {
  //   if (!!locationData)
  //     setCurrentPosition({
  //       latitude: parseFloat(locationData.coords.latitude),
  //       longitude: parseFloat(locationData.coords.longitude),
  //     });
  //   // (async () => {
  //   //   let status = await Location.requestForegroundPermissionsAsync();
  //   //   if (status.granted === false) {
  //   //     setErrorMsg("Permission to access location was denied");
  //   //     return;
  //   //   }
  //   //   let location = await Location.getCurrentPositionAsync({
  //   //     accuracy: 6,
  //   //   });

  //   //   setLocation(location);
  //   // })();
  // }, [locationData]);
  // console.log(getPosition, "i am getPosition");

  return (
    <View>
      <View style={styles.mapContainer}>
        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          mapType="hybrid"
          showsUserLocation={true}
          showsMyLocationButton={true}
          // followsUserLocation={true}
          loadingEnabled={true}
          region={{
            // ...currentPosition,
            latitude: getPosition.lat,
            longitude: getPosition.lng,
            latitudeDelta: 0.0024,
            longitudeDelta: 0.0013,
          }}
          style={styles.map}
          // onPress={({coordinate, position}) => {
          onPress={(e) => {
            console.log(e.target);
          }}
        >
          {/* <MapView.Marker
            coordinate={{
              latitude: getPosition.lat,
              longitude: getPosition.lng,
            }}
          /> */}
          {/* <MapView.Circle
            center={{ latitude: getPosition.lat, longitude: getPosition.lng }}
            radius={7}
            strokeWidth={0.5}
            strokeColor="red"
            fillColor="white"
          /> */}
          {markers &&
           markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              title={marker.title}
              subtitle={marker.subtitle}
              description={marker.description}
            />
          ))}
        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    width: "100%",
    height: 300,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "90%",
    height: 300,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#2eb6b6",
    borderRadius: 1,
  },
});
