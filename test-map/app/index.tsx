import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Overlay } from "react-native-maps";

const CENTER_LAT = -7.2347;
const CENTER_LON = -35.9154;
const DELTA_LAT = 0.00898;
const DELTA_LON = 0.00905;

const boundary = {
    sw: { latitude: CENTER_LAT - DELTA_LAT, longitude: CENTER_LON - DELTA_LON },
    ne: { latitude: CENTER_LAT + DELTA_LAT, longitude: CENTER_LON + DELTA_LON },
};

import CategoryBar from "../components/CategoryBar";
import BottomNav from "../components/BottomNav";

export default function MapaScreen() {
    const mapRef = React.useRef<MapView>(null);

    const checkInternalBoundary = (region: { latitude: number, longitude: number, latitudeDelta: number, longitudeDelta: number }) => {
        let { latitude, longitude } = region;
        let changed = false;

        const latMin = CENTER_LAT - (DELTA_LAT * 0.4);
        const latMax = CENTER_LAT + (DELTA_LAT * 0.4);
        const lonMin = CENTER_LON - (DELTA_LON * 0.4);
        const lonMax = CENTER_LON + (DELTA_LON * 0.1);

        if (latitude < latMin) { latitude = latMin; changed = true; }
        if (latitude > latMax) { latitude = latMax; changed = true; }
        if (longitude < lonMin) { longitude = lonMin; changed = true; }
        if (longitude > lonMax) { longitude = lonMax; changed = true; }

        if (changed && mapRef.current) {
            mapRef.current.animateToRegion({
                ...region,
                latitude,
                longitude,
            }, 100);
        }
    };

    return (
        <View style={styles.container}>
            <CategoryBar />

            <View style={styles.mapContainer}>
                <MapView
                    ref={mapRef}
                    provider={PROVIDER_GOOGLE}
                    mapType="none"
                    style={styles.map}
                    initialRegion={{
                        latitude: CENTER_LAT,
                        longitude: CENTER_LON,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005,
                    }}
                    minZoomLevel={16}
                    maxZoomLevel={22}
                    scrollEnabled={true}
                    pitchEnabled={false}
                    rotateEnabled={false}
                    // @ts-ignore
                    cameraBoundary={{
                        latLngBounds: {
                            northEast: boundary.ne,
                            southWest: boundary.sw,
                        },
                    }}
                    onRegionChange={checkInternalBoundary}
                >
                    <Overlay
                        image={require("../assets/images/map_overlay.jpg")}
                        bounds={[
                            [boundary.sw.latitude, boundary.sw.longitude],
                            [boundary.ne.latitude, boundary.ne.longitude]
                        ]}
                        opacity={1}
                    />
                    <Marker
                        coordinate={{ latitude: CENTER_LAT, longitude: CENTER_LON }}
                        title="Entrada do Parque"
                        description="Comece sua aventura aqui"
                    />
                </MapView>
            </View>

            <BottomNav />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    mapContainer: {
        flex: 1,
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
});
