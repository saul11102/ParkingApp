import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Dimensions, Image, Text, TouchableOpacity, ScrollView, Modal } from 'react-native';
import MapView, { Marker, UrlTile, Circle } from 'react-native-maps';
import * as Location from 'expo-location';
import { getParkings } from '../api/parkingService';
import styles from './MapScreen.styles';
import darkMapStyle from './darkMapStyle';
import EstadoConCirculo from './EstadoConCirculo';

export default function MapScreen() {
    const [parkings, setParkings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    const [zoom, setZoom] = useState(0.01);
    const LABEL_THRESHOLD = 0.03;
    const showLabels = zoom < LABEL_THRESHOLD;

    useEffect(() => {
        let subscriber;

        (async () => {
            // location
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.warn('Permiso para acceder a la ubicación denegado');
                setLoading(false);
                return;
            }
            subscriber = await Location.watchPositionAsync(
                {
                    accuracy: Location.Accuracy.High,
                    distanceInterval: 5,
                },
                (location) => {
                    setUserLocation({
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                    });
                }
            );

            // Cargar estacionamientos
            try {
                const data = await getParkings();
                setParkings(data);
            } catch (error) {
                console.error('Error al obtener estacionamientos', error);
            }

            setLoading(false);
        })();

        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        };
    }, []);

    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    const mapInitialRegion = {
        latitude: userLocation?.latitude || -4.0005,
        longitude: userLocation?.longitude || -79.2028,
        latitudeDelta: zoom,
        longitudeDelta: zoom,
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={mapInitialRegion}
                provider="google"
                customMapStyle={darkMapStyle}
                onRegionChangeComplete={region => setZoom(region.latitudeDelta)}
            >
                <UrlTile
                    urlTemplate="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    maximumZ={19}
                    tileSize={256}
                />

                {userLocation && (
                    <>
                        <Marker coordinate={userLocation}>
                            <View style={styles.userMarker}>
                                <View style={styles.userMarkerInner} />
                            </View>
                        </Marker>
                        <Circle
                            center={userLocation}
                            radius={30}
                            strokeColor="rgba(0, 150, 255, 0.4)"
                            fillColor="rgba(0, 150, 255, 0.15)"
                        />
                    </>
                )}

                {parkings.map(p => (
                    <React.Fragment key={p.id}>
                        <Marker
                            coordinate={{ latitude: p.latitud, longitude: p.altitud }}
                            anchor={{ x: 0.5, y: 1 }}           
                            tracksViewChanges={false}           
                            onPress={() => { setSelected(null); setTimeout(() => setSelected(p), 10); }}
                        >
                            <Image
                                source={{ uri: p.icono_mapa }}
                                style={styles.markerImage}
                                resizeMode="contain"
                            />
                        </Marker>
                        {zoom < LABEL_THRESHOLD && (
                            <Marker
                                coordinate={{ latitude: p.latitud, longitude: p.altitud }}
                                anchor={{ x: 0, y: 0.5 }}   
                                tracksViewChanges={false}
                                pointerEvents="none"
                            >
                                <Text style={styles.parkingName}>{p.nombre}</Text>
                            </Marker>
                        )}
                    </React.Fragment>
                ))}
            </MapView>

            <Modal
                visible={!!selected}
                transparent
                animationType="slide"
                onRequestClose={() => setSelected(null)}
            >
                <View style={styles.sheetOverlay}>
                    <View style={styles.sheet}>
                        <View style={styles.sheetHeader}>
                            <Text style={styles.sheetTitle}>{selected?.nombre}</Text>
                            <TouchableOpacity onPress={() => setSelected(null)}>
                                <Text style={styles.closeButton}>✕</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView contentContainerStyle={styles.sheetContent}>
                            <Image
                                source={{ uri: `http://alejandro.local:5000/${selected?.foto.ruta}` }}
                                style={styles.sheetImage}
                                resizeMode="cover"
                            />
                            <Text style={styles.label}>Dirección:</Text>
                            <Text style={styles.text}>{selected?.direccion}</Text>
                            <Text style={styles.label}>Descripción:</Text>
                            <Text style={styles.text}>{selected?.descripcion}</Text>
                            <Text style={styles.label}>Estado:</Text>
                            <EstadoConCirculo estado={selected?.estado} />
                            <Text style={styles.label}>Capacidad:</Text>
                            <Text style={styles.text}>{`0/${selected?.capacidad ?? 0}`}</Text>
                            <Text style={styles.label}>Tarifas:</Text>
                            {selected?.tarifas.map((t) => (
                                <View key={t.id} style={styles.tarifaRow}>
                                    <Text style={styles.text}>{t.nombre} ({t.descripcion}):</Text>
                                    <Text style={styles.text}>{t.precio} {t.moneda}</Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </View>
    );
}