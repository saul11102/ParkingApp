// hooks/Use_Service_EstacionamientoPrivado.js
import { useState, useEffect } from 'react';
import { listar_estacionamientosPrivados, modificar_estacionamientosPrivados } from './Service_estacionamientosPrivados';

export const usePrivateParkings = () => {
  const [parkings, setParkings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cargarDatos = () => {
    setLoading(true);
    listar_estacionamientosPrivados()
      .then(data => setParkings(data))
      .catch(err => setError(err.message || 'Error al cargar'))
      .finally(() => setLoading(false));
  };

  const modificar = async (formData) => {
    try {
      const res = await modificar_estacionamientosPrivados(formData);
      cargarDatos(); 
      return { ok: true, res };
    } catch (error) {
      return { ok: false, error };
    }
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  return { parkings, loading, error, refresh: cargarDatos, modificar };
};
