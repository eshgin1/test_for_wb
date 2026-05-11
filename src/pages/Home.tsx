import { useEffect } from "react";
import TableUsers from "../components/TableUsers";
import UserFormModal from "../components/UserFormModal";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedDispatch";
import { addUsers } from "../store/thunks/addUsers";
import { Typography } from "@mui/material";

const Home = () => {
  const dispatch = useAppDispatch();
  const { dataUsers, error, loading } = useAppSelector((state) => state.users);
  useEffect(() => {
    if (dataUsers.length === 0) {
      dispatch(addUsers());
    }
  }, [dispatch, dataUsers]);

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
};
export default Home;
