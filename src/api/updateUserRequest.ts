import type { UserFormData } from "../types/userTypes";

const updateUserRequest = async (id: string, updatedData: UserFormData) => {
  try {
    const response = await fetch(
      `https://69fdf65c8c70b15fa3ca0514.mockapi.io/api/v1/users/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при обновлении пользователя:", error);
  }
};

export default updateUserRequest;
