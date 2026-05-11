import {
  Button,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openModal } from "../store/slices/modalFormSlice";
import type { User } from "../types/userTypes";

const TableUsers = ({ dataUsers }: { dataUsers: User[] }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(dataUsers.length / itemsPerPage);

  const users = useMemo(() => {
    const sorted = [...dataUsers].toSorted(
      (a, b) => Number(b.id) - Number(a.id),
    );
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return sorted?.slice(start, end);
  }, [dataUsers, page]);

  const editUser = (user: User) => {
    dispatch(openModal(user));
  };

  const addNewUser = () => {
    dispatch(openModal(null));
  };

  return (
    <>
      <div className="table-header">
        <Typography variant="h4" gutterBottom>
          Список пользователей
        </Typography>
        <Button variant="contained" onClick={addNewUser}>
          Добавить
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Дата</TableCell>
              <TableCell>Имя</TableCell>
              <TableCell>Фамилия</TableCell>
              <TableCell>Город</TableCell>
              <TableCell>Действие</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((item: User) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>
                  {dayjs(item.createdAt).format("DD.MM.YYYY")}
                </TableCell>
                <TableCell>
                  <Link to={`/user/${item.id}`}>{item.name}</Link>
                </TableCell>
                <TableCell> {item.lastName}</TableCell>
                <TableCell>{item.city}</TableCell>
                <TableCell>
                  <Button
                    variant="text"
                    size="small"
                    onClick={() => editUser(item)}
                  >
                    Редактировать
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        className="pagination"
        count={totalPages}
        page={page}
        onChange={(_, value) => setPage(value)}
      />
    </>
  );
};

export default TableUsers;
