import { useState } from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const Calendar = ({ onDateChange }) => {
  const [date, setDate] = useState(dayjs());

  const handleDateChange = (newDate) =>{
    setDate(newDate);
    if(onDateChange) {
      onDateChange(newDate);
    }
  }

  return (
    <div>
      <h2 className="text-gray-700 text-xl mb-4">Workout Schedule</h2>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
           className="text-gray-700"
           value={date}
           onChange={handleDateChange}
            />
    </LocalizationProvider>
    </div>
  );
}

export default Calendar;