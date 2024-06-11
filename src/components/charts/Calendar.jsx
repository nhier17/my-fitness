import { useState } from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker, PickersDay } from '@mui/x-date-pickers';

const Calendar = ({ selectedDates, onDateChange }) => {
  const [date, setDate] = useState(dayjs());
  console.log(selectedDates)
  const handleDateChange = (newDate) => {
    setDate(newDate);
    if (onDateChange) {
      onDateChange(newDate);
    }
  };

  const renderDay = (date, selectedDates, pickersDayProps) => {
    const isSelected = selectedDates.some((selectedDate) =>
      dayjs(selectedDate).isSame(date, 'day')
    );
    return (
      <PickersDay
        {...pickersDayProps}
        sx={{
          backgroundColor: isSelected ? 'primary.main' : undefined,
          color: isSelected ? 'white' : undefined,
          borderRadius: isSelected ? '50%' : undefined,
          border: isSelected ? '2px solid #1976d2' : undefined,
        }}
      />
    );
  };

  return (
    <div>
      <h2 className="text-gray-700 text-xl mb-4">Workout Schedule</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          className="text-gray-700"
          displayStaticWrapperAs="desktop"
          value={date}
          onChange={handleDateChange}
          renderDay={(day, _, pickersDayProps) =>
            renderDay(day, selectedDates, pickersDayProps)
          }
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
