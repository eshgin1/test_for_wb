const getUsers = async () => {
  try {
    const response = await fetch(
      "https://69fdf65c8c70b15fa3ca0514.mockapi.io/api/v1/users",
      {
        method: "GET",
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка загрузки пользователей:", error);
  }
};

export default getUsers;
