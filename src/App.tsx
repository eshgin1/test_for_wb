import "./App.css";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./store/thunks/fetchUsers";

import TableUsers from "./components/TableUsers";

function App() {
  const dispatch = useDispatch();
  const { dataUsers, error, loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
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
    </>
  );
}

export default App;
