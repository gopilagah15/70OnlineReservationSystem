import React from 'react';

const ReportsPage = () => {
  const reportsData = [
    { resource: 'Conference Room A', occupiedSlots: ['10:00 AM', '11:00 AM'] },
    { resource: 'Conference Room B', occupiedSlots: ['1:00 PM', '2:00 PM'] },
  ];

  return (
    <div>
      <h1>Occupancy Report</h1>
      {reportsData.map((report, index) => (
        <div key={index}>
          <h3>{report.resource}</h3>
          <p>Occupied Slots: {report.occupiedSlots.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default ReportsPage;
