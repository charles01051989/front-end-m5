export interface Game {
    name: string;
    description: string;
    image: string;
    price: number;
  }
  
  export interface GameUpdate {
    product: Game;
    id: string;
  }
  
  export interface GameResponse {
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    updatedAt?: string;
    createdAt?: string;
  }