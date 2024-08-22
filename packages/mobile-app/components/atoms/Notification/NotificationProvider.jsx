import React from "react";
import { Notification } from "./Notification";

const NotificationContext = React.createContext();

const NOTIFICATION_DISPLAY_TIME = 5000;

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = React.useState(undefined);

  // We want to hold on to the setTimeout through-out each call
  // to ensure that we can replace the message and start the timer
  // over again for when to hide the message
  const clearNotification = React.useRef();

  const showNotification = (message, variant) => {
    setNotification({ message, variant });

    if (clearNotification.current) {
      clearTimeout(clearNotification.current);
    }

    clearNotification.current = window.setTimeout(() => {
      setNotification(undefined);
    }, NOTIFICATION_DISPLAY_TIME);
  };

  return (
    <NotificationContext.Provider value={showNotification}>
      {children}
      <Notification
        visible={!!notification}
        onDismiss={() => {
          setNotification(undefined);
        }}
        variant={notification?.variant}
      >
        {notification?.message}
      </Notification>
    </NotificationContext.Provider>
  );
};

export const useDisplayNotification = () => {
  const showNotification = React.useContext(NotificationContext);

  return showNotification;
};
