import React, { useState } from 'react';
import TimeSlotPicker from './TimeSlotPicker';
import ConfirmationDialog from './ConfirmationDialog';

const BookingForm = ({ resource }) => {
  const [timeSlot, setTimeSlot] = useState('');
  const [showDialog, setShowDialog] = useState(false);

  const handleBooking = () => {
    if (timeSlot) {
      setShowDialog(true);
    } else {
      alert('Please select a time slot');
    }
  };

  return (
    <div>
      <h2>Book {resource.name}</h2>
      <TimeSlotPicker setTimeSlot={setTimeSlot} />
      <button onClick={handleBooking}>Book Now</button>
      {showDialog && (
        <ConfirmationDialog
          resource={resource}
          timeSlot={timeSlot}
          closeDialog={() => setShowDialog(false)}
        />
      )}
    </div>
  );
};

export default BookingForm;
