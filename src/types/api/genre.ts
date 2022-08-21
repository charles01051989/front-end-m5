export interface Genre {
    name: string;
  }
  
  export interface GenreUpdate {
    genre: Genre;
    id: string;
  }
  
  export interface GenreResponse {
    id: string;
    name: string;
  }