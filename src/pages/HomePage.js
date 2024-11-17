import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';
import ResourceList from '../components/ResourceList';

const HomePage = () => {
  const [selectedResource, setSelectedResource] = useState(null);

  return (
    <div>
      <h1>Online Reservation System</h1>
      <ResourceList setSelectedResource={setSelectedResource} />
      {selectedResource && <BookingForm resource={selectedResource} />}
    </div>
  );
};

export default HomePage;
