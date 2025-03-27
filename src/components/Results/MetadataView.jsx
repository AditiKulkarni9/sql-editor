import React from 'react';
import './MetadataView.css';

function getType(value) {
  if (value === null) return 'null';
  if (Array.isArray(value)) return 'array';
  return typeof value;
}

function MetadataView({ data }) {
  if (!data || data.length === 0) {
    return <p>No metadata available</p>;
  }

  const sample = data[0];
  const metadata = Object.entries(sample).map(([key, value]) => ({
    column: key,
    type: getType(value),
  }));

  return (
    <div className="metadata-view">
      <table>
        <thead>
          <tr>
            <th>Column</th>
            <th>Data Type</th>
          </tr>
        </thead>
        <tbody>
          {metadata.map((meta) => (
            <tr key={meta.column}>
              <td>{meta.column}</td>
              <td>{meta.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MetadataView;
