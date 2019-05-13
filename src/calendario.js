import React, { useState, useEffect } from "react";
import DayPicker from "react-day-picker";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

function Calendario() {
  const [selectDay, setSelectDay] = useState();

  function handleDayClick(day) {
    setSelectDay(day);
  }

  return (
    <>
      <DayPicker onDayClick={handleDayClick} />;
      {selectDay ? (
        <p>You clicked {selectDay.toLocaleDateString()}</p>
      ) : (
        <p>Please Select a day</p>
      )}
    </>
  );
}

export default Calendario;
