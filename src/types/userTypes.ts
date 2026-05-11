export interface User {
  id: string;
  name: string;
  city: string;
  lastName: string;
  createdAt: string;
}

export interface UsersState {
  dataUsers: User[];
  error: string | null;
  loading: boolean;
}

export interface UserFormData {
  name: string;
  city: string;
  lastName: string;
}
