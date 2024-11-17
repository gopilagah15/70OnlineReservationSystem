import React from 'react';

const resources = [
  { id: 1, name: 'Conference Room A' },
  { id: 2, name: 'Conference Room B' },
  { id: 3, name: 'Meeting Room' },
];

const ResourceList = ({ setSelectedResource }) => {
  return (
    <div>
      <h2>Select a Resource</h2>
      <ul>
        {resources.map((resource) => (
          <li key={resource.id} onClick={() => setSelectedResource(resource)}>
            {resource.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceList;
