export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Support {
  url: string;
  text: string;
}

export interface UserResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: Support;
}

export interface StateUserResponse {
  users: User[];
  loading: boolean;
}

export interface UserByIdResponse {
  data: User;
  support: Support;
}
