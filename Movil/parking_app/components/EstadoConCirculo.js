import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EstadoConCirculo = ({ estado }) => {
  // Mapeo de estado a colores según enum que diste
  const colorEstado = {
    Disponible: '#22c55e',     // verde
    Cerrado: '#fbbf24',        // amarillo
    Lleno: '#fbbf24',          // amarillo
    "No disponible": '#ef4444',// rojo
    Desactivado: '#ef4444',    // rojo
  };

  const color = colorEstado[estado] || '#6b7280'; // gris si no coincide

  return (
    <View style={styles.container}>
      <View style={[styles.circle, { backgroundColor: color }]} />
      <Text style={styles.text}>{estado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    color: '#f3f4f6', // texto claro para fondo oscuro (ajusta según estilo)
  },
});

export default EstadoConCirculo;
