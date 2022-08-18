import { User } from "./user";

export interface Login {
  name: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}