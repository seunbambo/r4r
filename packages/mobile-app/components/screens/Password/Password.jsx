import React from "react";
import { Controller } from "react-hook-form";

// Styles
import { TextInput } from "./Password.styles";

// Components
import PageContainer from "../../atoms/PageContainer";
import { ContentArea } from "../../atoms/ContentArea";
import { PillButton } from "../../atoms/PillButton";

// Hooks
import { usePassword } from "../../../hooks/usePassword";
import { useAmplitude } from "../../../hooks/useAmplitude";

export const Password = () => {
  const {
    control,
    handleSubmit,
    reset,
    errors,
    onSubmit,
    passwordData,
    register,
    getValues,
    setValue,
  } = usePassword();
  useAmplitude(Password.displayName);

  let confirmNewPasswordErrorMessage = undefined;

  if (
    errors.confirmNewPassword &&
    errors.confirmNewPassword.type === "required"
  ) {
    confirmNewPasswordErrorMessage = "Confirm New Password is required";
  } else if (errors.confirmNewPassword) {
    confirmNewPasswordErrorMessage =
      "New Password and Confirm New Password must match";
  }

  return (
    <PageContainer>
      <ContentArea>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={passwordData.fields.currentPassword}
              error={errors.currentPassword}
              errorMessage={
                errors.currentPassword &&
                errors.currentPassword.type === "required" &&
                "Current Password is required"
              }
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="currentPassword"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={passwordData.fields.newPassword}
              error={errors.newPassword}
              errorMessage={
                errors.newPassword &&
                errors.newPassword.type === "required" &&
                "New Password is required"
              }
              onBlur={onBlur}
              onChangeText={(e) => {
                setValue("newPassword", e);
                onChange(e);
              }}
              value={value}
              {...register("newPassword")}
              ref={null}
            />
          )}
          name="newPassword"
        />
        <Controller
          control={control}
          rules={{
            required: true,
            validate: (value) => {
              const newPasswordValue = getValues("newPassword");
              return value === newPasswordValue;
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={passwordData.fields.confirmNewPassword}
              error={errors.confirmNewPassword}
              errorMessage={confirmNewPasswordErrorMessage}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="confirmNewPassword"
        />
        <PillButton
          title="Save New Password"
          onPress={handleSubmit(onSubmit)}
        />
      </ContentArea>
    </PageContainer>
  );
};

Password.displayName = "Password";
