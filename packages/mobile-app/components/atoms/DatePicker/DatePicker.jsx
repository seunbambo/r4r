import React, { useEffect, useState } from "react";
import { View, Button, Text } from "react-native";
import { useTheme } from "react-native-paper";
import { PillButton } from "../PillButton";
import TextInput from "../TextInput";
import "intl";
import "intl/locale-data/jsonp/en";

import { formatRelative } from "date-fns";

import { DatePickerModal, TimePickerModal } from "react-native-paper-dates";
import { capitalize } from "../../../utils/string";

const PICKER_STATES = {
  CLOSED: "closed",
  DATE: "date",
  TIME: "time",
};

export const DatePicker = ({
  initialDate,
  onChange,
  inputProps,
  isRangeLimited,
}) => {
  const [pickerState, setPickerState] = useState(PICKER_STATES.CLOSED);
  const [date, setDate] = useState(initialDate || new Date());

  useEffect(() => {
    onChange && onChange(date);
  }, [date]);

  const formattedDate = formatRelative(date, new Date());

  return (
    <>
      <TextInput
        {...inputProps}
        value={capitalize(`${formattedDate}`)}
        onPressIn={() => {
          setPickerState(PICKER_STATES.DATE);
        }}
      />

      <DatePickerModal
        locale="en"
        mode="single"
        visible={pickerState === PICKER_STATES.DATE}
        label="Select Date"
        editIcon={false}
        onDismiss={() => {
          setPickerState(PICKER_STATES.CLOSED);
        }}
        date={date}
        onConfirm={(localDate) => {
          setDate(localDate.date);
          setPickerState(PICKER_STATES.TIME);
        }}
        validRange={
          isRangeLimited
            ? {
                endDate: new Date(),
              }
            : ""
        }
      />
      <TimePickerModal
        locale="en"
        visible={pickerState === PICKER_STATES.TIME}
        onDismiss={() => {
          setPickerState(PICKER_STATES.CLOSED);
        }}
        onConfirm={(selectedTime) => {
          const newDate = date;
          newDate.setHours(selectedTime.hours, selectedTime.minutes);
          setDate(newDate);
          setPickerState(PICKER_STATES.CLOSED);
        }}
      />
    </>
  );
};
