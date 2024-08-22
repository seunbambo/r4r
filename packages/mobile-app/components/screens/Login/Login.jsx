import React, { useState, useCallback, useContext } from "react";
import { Alert, Linking } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

import {
  TextInput,
  UnderlineText,
  TermsAndConditionsWrapper,
  TextClickable,
} from "./Login.styles";
import { Hero } from "../../atoms/Hero";
import PageContainer from "../../atoms/PageContainer";
import { HeroText } from "../../atoms/HeroText";
import { ContentArea } from "../../atoms/ContentArea";
import { PillButton } from "../../atoms/PillButton";
import { Divider, StyledText } from "../../atoms";
import { isValidEmail } from "../../../utils/string";
import { useAuthCtx } from "../../../contexts/AuthContext";
import { login } from "../../../services/api";
import { getItem } from "../../../utils/storage";
import { getClienBasetUrl } from "../../../services";
import { useAmplitude } from "../../../hooks/useAmplitude";
import { TouchTargetWrapper } from "../../atoms/TouchTargetWrapper";
import { colors } from "../../../assets/styles/Theme";

const getContent = () => {
  return {
    heroHeading: "Welcome",
    fields: {
      email: "Email",
      password: "Password",
    },
  };
};

export const Login = () => {
  const navigation = useNavigation();
  const content = getContent();

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useAuthCtx();
  useAmplitude(Login.displayName);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useFocusEffect(
    useCallback(() => {
      reset();
    }, [reset]),
  );

  const onSubmit = async ({ email, password }) => {
    try {
      setIsAuthenticating(true);
      const emailTrimmed = email.trim();
      const passwordTrimmed = password.trim();
      const response = await login(emailTrimmed, passwordTrimmed);

      authCtx.authenticate(response.jwt);

      // const firstLogin = async () => {
      const first = await getItem("firstTimeLogin");

      if (!first) {
        return navigation.navigate("WelcomeOnboarding");
      }
      return navigation.navigate("Home", {
        name: "Home",
      });
      // };
    } catch (error) {
      setIsAuthenticating(false);
      return Alert.alert(
        "Error!",
        "Please check your credentials and try again later.",
      );
    }
  };

  let emailErrorMessage;

  if (errors.email && errors.email.type === "required") {
    emailErrorMessage = "Email is required";
  } else if (errors.email) {
    emailErrorMessage = "Email is not valid";
  }

  return (
    <PageContainer>
      <Hero>
        <HeroText upperText={content.heroHeading} fontSize={32} />
      </Hero>
      <ContentArea>
        <Controller
          control={control}
          rules={{
            required: true,
            validate: isValidEmail,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={content.fields.email}
              error={errors.email}
              errorMessage={emailErrorMessage}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder={content.fields.password}
              error={errors.password}
              errorMessage={
                errors.password &&
                errors.password.type === "required" &&
                "Password is required"
              }
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name="password"
        />
        <PillButton
          title={isAuthenticating ? "Processsing..." : "Log In"}
          onPress={handleSubmit(onSubmit)}
          fontSize={14}
          disabled={isAuthenticating}
        />
        <TouchTargetWrapper
          onPress={() => {
            Linking.openURL(`${getClienBasetUrl()}/confirm-email`);
          }}
        >
          <UnderlineText
            alignment="center"
            opacity="lighter"
            fontSize={14}
            padding={15}
          >
            Recover Password
          </UnderlineText>
        </TouchTargetWrapper>
        <Divider backgroundColor={colors.borderSubdark} />
        <TermsAndConditionsWrapper>
          <StyledText
            alignment="center"
            opacity="lighter"
            fontSize={14}
            style={{ minHeight: 48 }}
          >
            By logging in you agree to our{" "}
          </StyledText>
          <TouchTargetWrapper
            onPress={() => {
              navigation.navigate("Terms of service");
            }}
          >
            <UnderlineText alignment="center" fontSize={14} opacity="lighter">
              Terms of Service
            </UnderlineText>
          </TouchTargetWrapper>
        </TermsAndConditionsWrapper>
      </ContentArea>
    </PageContainer>
  );
};

Login.displayName = "Login";
