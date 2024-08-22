import { createContext, useMemo, useState } from "react";

export const ContactUsContext = createContext();

export const ContactUsContextProvider = ({ children }) => {
  const [contactUsData, setContactUsData] = useState(undefined);

  const providerValue = useMemo(
    () => ({
      contactUsData,
      setContactUsData,
    }),
    [contactUsData],
  );

  return (
    <ContactUsContext.Provider value={providerValue}>
      {children}
    </ContactUsContext.Provider>
  );
};
