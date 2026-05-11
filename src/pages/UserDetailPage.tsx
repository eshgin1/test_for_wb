import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/useTypedDispatch";
import { Card, CardContent, TextField, Typography } from "@mui/material";
import type { User } from "../types/userTypes";

const UserDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { dataUsers } = useAppSelector((state) => state.users);
  const findUser = dataUsers.find((user: User) => user.id === id);

  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h4">Информация о пользователе</Typography>
        <div className="card-block">
          <div className="card-block-left">
            <TextField
              id="standard-read-only-input"
              label="Уникальный индификатор"
              value={findUser?.id}
              variant="standard"
              focused
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
            <TextField
              id="standard-read-only-input"
              label="Имя"
              value={findUser?.name}
              variant="standard"
              focused
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
            <TextField
              id="standard-read-only-input"
              label="Фамилия"
              value={findUser?.lastName}
              variant="standard"
              focused
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
            <TextField
              id="standard-read-only-input"
              label="Город"
              value={findUser?.city}
              variant="standard"
              focused
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
          </div>
          <div className="card-block-center">
            <TextField
              id="standard-read-only-input"
              label="Пол"
              value={findUser?.gender}
              variant="standard"
              focused
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
            <TextField
              id="standard-read-only-input"
              label="Номер телефона"
              value={findUser?.phone}
              variant="standard"
              focused
              slotProps={{
                input: {
                  readOnly: true,
                },
              }}
            />
          </div>
          <div className="card-block-left">
            <div className="card-block-img">
              <img src={findUser?.avatar} alt="avatar" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserDetailPage;
