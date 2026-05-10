import type { User } from "./userTypes";

export interface ModalFormState {
  status: boolean;
  editingItem: User | null;
}
