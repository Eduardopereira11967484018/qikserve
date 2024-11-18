import { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import { Restaurante } from '../types/Restaurante';

const useRestaurante = () => {
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurante = async () => {
      try {
        const response = await axiosInstance.get('venue/9');
        setRestaurante(response.data);
      } catch (err) {
        setError('Erro ao carregar dados do restaurante');
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurante();
  }, []);

  return { restaurante, loading, error };
};

export default useRestaurante;
