import React from 'react';

const ConfirmationDialog = ({ resource, timeSlot, closeDialog }) => {
  const handleConfirm = () => {
    alert(`Booking confirmed for ${resource.name} at ${timeSlot}`);
    closeDialog();
  };

  return (
    <div>
      <h3>Confirm Your Booking</h3>
      <p>Resource: {resource.name}</p>
      <p>Time Slot: {timeSlot}</p>
      <button onClick={handleConfirm}>Confirm</button>
      <button onClick={closeDialog}>Cancel</button>
    </div>
  );
};

export default ConfirmationDialog;
