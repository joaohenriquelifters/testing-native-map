import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const mapStyle = [
  // Fundo geral
  { elementType: "geometry", stylers: [{ color: "#121212" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#121212" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#B3B3B3" }] },

  // Cidades / nomes principais
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#FFFFFF" }],
  },

  // Pontos de interesse (lugares)
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#181818" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#1DB954" }], // verde Spotify
  },

  // Parques
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#1DB95433" }], // verde com transparência
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#1DB954" }],
  },

  // Estradas
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#282828" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1DB954" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#B3B3B3" }],
  },

  // Rodovias principais
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#1DB954" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#FFFFFF" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#121212" }],
  },

  // Água
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#181818" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#1DB954" }],
  },

  // Transporte público
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#282828" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#1DB954" }],
  },
];


export default function MapaScreen() {
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                mapType="none"
                style={styles.map}
                initialRegion={{
                    latitude: -7.2347,
                    longitude: -35.9154,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
                customMapStyle={mapStyle}
            >
                <Marker
                    coordinate={{ latitude: -7.2347, longitude: -35.9154 }}
                    title="Entrada do Parque"
                    description="Comece sua aventura aqui"
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
}); 