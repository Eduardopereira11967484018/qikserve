import React from 'react';
import { Restaurante } from '../types/Restaurante';
import useRestaurante from '../hooks/useRestaurante';

const RestauranteComponent: React.FC = () => {
  const { restaurante, loading, error } = useRestaurante();

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  if (!restaurante) return <div>Restaurante não encontrado</div>;

  return (
    <div style={{ backgroundColor: restaurante.webSettings.backgroundColour }}>
      <header style={{ backgroundColor: restaurante.webSettings.navBackgroundColour }}>
        <img src={restaurante.webSettings.bannerImage} alt="Banner do Restaurante" />
        <h1 style={{ color: restaurante.webSettings.primaryColour }}>{restaurante.name}</h1>
      </header>
      <div>
        <h2>Endereço: {restaurante.address1}, {restaurante.city} - {restaurante.country}</h2>
      </div>
    </div>
  );
};

export default RestauranteComponent;
