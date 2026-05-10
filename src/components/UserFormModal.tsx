import { Box, Button, Modal, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { closeModal } from "../store/slices/modalFormSlice";
import type { UserFormData } from "../types/userTypes";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedDispatch";
import { updateUser } from "../store/thunks/updateUser";
import { Controller, useForm } from "react-hook-form";

const style = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 3,
};

const UserFormModal = () => {
  const dispatch = useAppDispatch();
  const { status, editingItem } = useAppSelector((state) => state.modalForm);
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserFormData>({
    defaultValues: { name: "", city: "" },
  });

  const handleClose = () => {
    dispatch(closeModal());
    reset({ name: "", city: "" });
  };

  const onSubmit = async (data: UserFormData) => {
    if (!editingItem) return;
    setLoading(true);
    try {
      await dispatch(
        updateUser({ id: editingItem.id, updatedData: data }),
      ).unwrap();
      handleClose();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (editingItem) {
      reset({
        name: editingItem.name || "",
        city: editingItem.city || "",
      });
    }
  }, [editingItem, reset]);

  return (
    <Modal
      open={status}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={style}>
        <h2 id="parent-modal-title">Редактирование пользователя</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Имя обязательно" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Имя"
                variant="standard"
                margin="normal"
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />
          <Controller
            name="city"
            control={control}
            rules={{ required: "Город обязателен" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Город"
                variant="standard"
                margin="normal"
                fullWidth
                error={!!errors.city}
                helperText={errors.city?.message}
              />
            )}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{ mt: 2 }}
          >
            {loading ? "Сохранение..." : "Изменить"}
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default UserFormModal;
