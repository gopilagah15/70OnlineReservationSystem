import React from 'react';

const TimeSlotPicker = ({ setTimeSlot }) => {
  const timeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM'];

  return (
    <div>
      <h3>Select a Time Slot</h3>
      <select onChange={(e) => setTimeSlot(e.target.value)}>
        <option value="">--Select Time Slot--</option>
        {timeSlots.map((slot, index) => (
          <option key={index} value={slot}>
            {slot}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeSlotPicker;
