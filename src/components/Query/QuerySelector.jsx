import { useState } from 'react';
import './QuerySelector.css';
import { FaClipboardList } from "react-icons/fa";

function QuerySelector({ queries, onChange }) {
  const [search, setSearch] = useState('');

  const filteredQueries = queries.filter((q) =>
    q.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="query-selector">
      <div className="query-header">
        <h1 className="sidebar-title">
        <FaClipboardList className="query-icon"/>
          Queries
        </h1>
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

        <ul className="query-list">
          {filteredQueries.map((q) => (
            <li key={q.id} className="query-card" onClick={() => onChange(q)}>
              <div className="query-title">{q.title}</div>
              <div className="query-snippet">{q.query.slice(0, 40)}...</div>
            </li>
          ))}
        </ul>
    </div>

  );
}

export default QuerySelector;
