export interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
    available: boolean;
    images: { id: number; image: string }[];
  }
  
  export interface Section {
    id: number;
    name: string;
    items: Item[];
  }
  
  export interface Menu {
    id: number;
    name: string;
    sections: Section[];
  }
  