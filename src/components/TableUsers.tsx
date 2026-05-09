import {
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

const TableUsers = ({ dataUsers }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(dataUsers.length / itemsPerPage);

  const cols = useMemo(() => {
    return dataUsers.length ? Object.keys(dataUsers[0]) : [];
  }, [dataUsers]);

  const users = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return dataUsers?.slice(start, end);
  }, [dataUsers, page]);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Список пользователей
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {cols.map((item, i) => (
                <TableCell key={i}>{item}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  {dayjs(item.createdAt).format("DD.MM.YYYY")}
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  <img
                    loading="lazy"
                    className="avatar"
                    src={item.avatar}
                    alt="pic"
                  />
                </TableCell>
                <TableCell>{item.city}</TableCell>
                <TableCell>{item.id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        className="pagination"
        count={totalPages}
        page={page}
        onChange={(event, value) => setPage(value)}
      />
    </>
  );
};

export default TableUsers;
