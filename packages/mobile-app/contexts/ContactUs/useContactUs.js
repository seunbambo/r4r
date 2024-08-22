import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { useContactUsCtx } from "./useContactUsContext";

import { postContactUs } from "../../services";
import { useDisplayNotification } from "../Notification";
import { trimObjStrings } from "../../utils/string";

// Potentially replace with call to get data from CMS
const mockContactUsData = {
  heroHeading: "Contact Us",
  heroSubheading: "We're here to support you.",
  fields: {
    fullName: "Full Name",
    email: "Email",
    phoneNumber: "Phone Number",
    message: "Message",
  },
};

export const useContactUs = () => {
  const { contactUsData, setContactUsData } = useContactUsCtx();
  const displayNotification = useDisplayNotification();

  const defaultFormValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  };

  const getContactUsData = async () => {
    setContactUsData(mockContactUsData);
  };

  useEffect(() => {
    const loadContent = async () => {
      if (!contactUsData) {
        await getContactUsData();
      }
    };

    loadContent();
  }, [contactUsData]);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultFormValues,
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    try {
      const out = await postContactUs(trimObjStrings(data));
      displayNotification("Your message was sent");
    } catch (ex) {
      displayNotification(
        "Could not send message. Please try again later",
        "error",
      );
    }
  };

  return { control, handleSubmit, reset, onSubmit, errors };
};
