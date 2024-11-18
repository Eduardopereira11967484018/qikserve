//useMenu.ts
import { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import { Menu } from '../types/Menu';

const useMenu = () => {
  const [menu, setMenu] = useState<Menu | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axiosInstance.get('menu');
        setMenu(response.data);
      } catch (err) {
        setError('Erro ao carregar o menu');
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  return { menu, loading, error };
};

export default useMenu;
