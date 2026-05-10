import "./App.css";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { addUsers } from "./store/thunks/addUsers";

import TableUsers from "./components/TableUsers";
import UserFormModal from "./components/UserFormModal";
import { useAppDispatch, useAppSelector } from "./hooks/useTypedDispatch";

function App() {
  const dispatch = useAppDispatch();
  const { dataUsers, error, loading } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(addUsers());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="table-block">
        <Typography variant="body1">Загрузка пользователей...</Typography>
      </div>
    );
  }

  if (error) {
    return (
      <div className="table-block">
        <Typography variant="h5" color="error">
          Ошибка: {error}
        </Typography>
      </div>
    );
  }

  return (
    <>
      <div className="table-block">
        <TableUsers dataUsers={dataUsers} />
      </div>
      <UserFormModal />
    </>
  );
}

export default App;
