export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export interface Support {
  url: string;
  text: string;
}

export interface UserResponse extends Array<User> {}

export interface StateUserResponse {
  users: User[];
  loading: boolean;
}

export interface UserByIdResponse extends User {}
