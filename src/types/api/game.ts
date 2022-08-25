export interface Game {
    title: string;
    description: string;
    image: string;
    year: number;
  }
  
  export interface GameUpdate {
    game: Game;
    id: string;
  }
  
  export interface GameResponse {
    id: string;
    title: string;
    description: string;
    image: string;
    year: number;
    genre: string;
    updatedAt?: string;
    createdAt?: string;
  }