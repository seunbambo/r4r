import React, { useState, useCallback } from "react";
import { ActivityIndicator } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useFocusEffect } from "@react-navigation/native";

// Styles
import { Space, TextInput } from "./ContactUs.styles";

// Components
import { Hero } from "../../atoms/Hero";
import PageContainer from "../../atoms/PageContainer";
import { HeroText } from "../../atoms/HeroText";
import { ContentArea } from "../../atoms/ContentArea";
import { PillButton } from "../../atoms/PillButton";

import { isValidEmail, isValidPhoneNumber } from "../../../utils/string";

// Hooks
import { useContactUs, useContactUsCtx } from "../../../contexts/ContactUs";
import { useAmplitude } from "../../../hooks/useAmplitude";

export const ContactUs = () => {
  const { control, handleSubmit, reset, errors, onSubmit } = useContactUs();
  const { contactUsData } = useContactUsCtx();
  useAmplitude(ContactUs.displayName);

  useFocusEffect(
    useCallback(() => {
      reset();
    }, []),
  );

  if (!contactUsData) {
    return <ActivityIndicator />;
  }

  let emailErrorMessage = undefined;

  if (errors.email && errors.email.type === "required") {
    emailErrorMessage = "Email is required";
  } else if (errors.email) {
    emailErrorMessage = "Email is not valid";
  }

  let phoneErrorMessage = undefined;

  if (errors.phoneNumber && errors.phoneNumber.type === "required") {
    phoneErrorMessage = "Phone is required";
  } else if (errors.phoneNumber) {
    phoneErrorMessage = "Phone number is not valid, please enter ###-###-####";
  }

  return (
    <PageContainer>
      <Hero>
        <HeroText
          upperText={contactUsData.heroHeading}
          lowerText={contactUsData.heroSubheading}
        />
      </Hero>
      <ContentArea>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={contactUsData.fields.fullName}
              error={errors.fullName}
              errorMessage={
                errors.fullName &&
                errors.fullName.type === "required" &&
                "Full Name is required"
              }
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="fullName"
        />
        <Controller
          control={control}
          rules={{
            required: true,
            validate: isValidEmail,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={contactUsData.fields.email}
              error={errors.email}
              errorMessage={emailErrorMessage}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{
            required: true,
            validate: isValidPhoneNumber,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={contactUsData.fields.phoneNumber}
              error={errors.phoneNumber}
              errorMessage={phoneErrorMessage}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="phoneNumber"
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={contactUsData.fields.message}
              error={errors.message}
              errorMessage={
                errors.message &&
                errors.message.type === "required" &&
                "Message is required"
              }
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="message"
        />
        <PillButton title="Send Message" onPress={handleSubmit(onSubmit)} />
      </ContentArea>
      <Space />
    </PageContainer>
  );
};

ContactUs.displayName = "ContactUs";
