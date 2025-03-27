import React, { useState } from 'react';

const SqlCopilot = ({ onGenerate, darkMode }) => {
  const [prompt, setPrompt] = useState('');

  const handleGenerate = () => {
    const generatedSQL = `SELECT * FROM users WHERE active = true;`;
    onGenerate(generatedSQL);
  };

  return (
    <div
      className="copilot-container"
      style={{
        backgroundColor: darkMode ? '#333' : '#f9f9f9',
        color: darkMode ? '#fff' : '#000',
        padding: '1rem',
        borderRadius: '0.5rem',
        marginTop: '1rem',
        border: '1px solid #ccc'
      }}
    >
      <h3>SQL Copilot</h3>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe what you want to query..."
        rows={4}
        style={{
          width: '100%',
          padding: '0.5rem',
          resize: 'vertical',
          backgroundColor: darkMode ? '#222' : '#fff',
          color: darkMode ? '#eee' : '#000',
          border: '1px solid #ccc',
          borderRadius: '4px',
          fontFamily: 'monospace'
        }}
      />
      <button
        onClick={handleGenerate}
        style={{
          marginTop: '0.5rem',
          padding: '0.5rem 1rem',
          backgroundColor: darkMode ? '#444' : '#000',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Generate SQL
      </button>
    </div>
  );
};

export default SqlCopilot;
