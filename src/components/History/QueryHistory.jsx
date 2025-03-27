import { useState } from 'react';
import '../Query/QuerySelector.css'; 
import { FaTrash } from 'react-icons/fa';


function QueryHistory({ queryHistory, onSelect }) {
    console.log("History list:", queryHistory);

  const [search, setSearch] = useState('');

  const filtered = queryHistory.filter(q =>
    q.toLowerCase().includes(search.toLowerCase())
  );

  const handleClearHistory = () => {
    localStorage.removeItem('queryHistory');
    onSelect(''); // Optionally clear the editor
    setSearch('');
    window.location.reload(); // reload to update state from App (or lift state up if preferred)
  };
  

  return (
    <div className="query-selector query-history-container">
      <div className="query-header">
        <div className="sidebar-title">
            Query History
          <button className="clear-history-btn" onClick={handleClearHistory} title="Clear History">
            <FaTrash />
          </button>
        </div>

        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="query-scrollable">
        <div className="query-history-list">
          {filtered.map((query, index) => (
            <div key={index} className="query-card" onClick={() => onSelect(query)}>
              <div className="query-title">{query.slice(0, 50)}...</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QueryHistory;
