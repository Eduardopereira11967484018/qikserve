export interface WebSettings {
    bannerImage: string;
    backgroundColour: string;
    primaryColour: string;
    navBackgroundColour: string;
  }
  
  export interface Restaurante {
    id: number;
    name: string;
    internalName: string;
    description: string | null;
    liveFlag: number;
    demoFlag: number;
    address1: string;
    address2: string;
    city: string;
    country: string;
    webSettings: WebSettings;
    ccy: string;
    ccySymbol: string;
    currency: string;
  }
  