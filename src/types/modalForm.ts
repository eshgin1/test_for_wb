import type { User } from "./userTypes";

export interface ModalFormState {
  status: boolean;
  user: User | null;
}
