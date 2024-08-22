import * as React from "react";
import { NotificationBar, ErrorNotificationBar } from "./Notification.styles";

const variants = {
  STANDARD: "standard",
  ERROR: "error",
};

export const Notification = ({
  visible,
  onDismiss,
  duration,
  children,
  ...rest
}) => {
  let Component = NotificationBar;

  if (rest.variant === variants.ERROR) {
    Component = ErrorNotificationBar;
  }

  return (
    <Component
      visible={visible}
      onDismiss={onDismiss}
      duration={duration}
      {...rest}
    >
      {children}
    </Component>
  );
};
