import { useForm } from "react-hook-form";

import { usePostPassword } from "./useAuthenticatedApi";
import { useDisplayNotification } from "../contexts/Notification";
import { useAuthCtx } from "../contexts/AuthContext";

export const usePassword = () => {
  const displayNotification = useDisplayNotification();
  const postPassword = usePostPassword();
  const authCtx = useAuthCtx();

  const passwordData = {
    fields: {
      currentPassword: "Current Password",
      newPassword: "New Password",
      confirmNewPassword: "Confirm New Password",
    },
  };
  const defaultFormValues = {
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    register,
    getValues,
    setValue,
  } = useForm({
    defaultValues: defaultFormValues,
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    try {
      const response = await postPassword(data);
      authCtx.authenticate(response.jwt);
      displayNotification("Password updated");
      reset();
    } catch (ex) {
      displayNotification(
        "An error occured. Please check your password and try again",
        "error",
      );
    }
  };

  return {
    control,
    handleSubmit,
    reset,
    onSubmit,
    errors,
    passwordData,
    register,
    getValues,
    setValue,
  };
};
