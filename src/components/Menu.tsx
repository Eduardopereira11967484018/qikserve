import React from 'react';
import { Menu, Item } from '../types/Menu';
import useMenu from '../hooks/useMenu';

const MenuComponent: React.FC = () => {
  const { menu, loading, error } = useMenu();

  if (loading) return <div>Carregando menu...</div>;
  if (error) return <div>{error}</div>;

  if (!menu) return <div>Menu não encontrado</div>;

  return (
    <div>
      {menu.sections.map((section) => (
        <div key={section.id}>
          <h3>{section.name}</h3>
          {section.items.map((item: Item) => (
            <div key={item.id}>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <p>Preço: {item.price}</p>
              <img src={item.images[0].image} alt={item.name} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MenuComponent;
