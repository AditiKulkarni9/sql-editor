import React, { useState, useEffect } from 'react';
import QuerySelector from './components/Query/QuerySelector';
import QueryEditor from './components/Query/QueryEditor';
import ResultTable from './components/Results/ResultTable';
import { queries } from './data/queries';
import { FaPlay, FaSave, FaTrash, FaDownload } from 'react-icons/fa';
import MetadataView from './components/Results/MetadataView';
import QueryHistory from './components/History/QueryHistory';
import LightIcon from './assets/light.svg';
import DarkIcon from './assets/dark.svg'
import './App.css';


function App() {
  const [selectedQueryId, setSelectedQueryId] = useState(0);
  const [executedQueryId, setExecutedQueryId] = useState(0);
  const [resultData, setResultData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('table');
  const [queryText, setQueryText] = useState(queries[selectedQueryId].query);
  const [clearEditor, setClearEditor] = useState(false);
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [executionTime, setExecutionTime] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  
  const [queryHistory, setQueryHistory] = useState(() => {
    const savedHistory = localStorage.getItem('queryHistory');
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);  

  useEffect(() => {
    localStorage.setItem('queryHistory', JSON.stringify(queryHistory));
  }, [queryHistory]);  


  useEffect(() => {
    setQueryText(queries[selectedQueryId].query);
  }, [selectedQueryId]);

  const addToQueryHistory = (query) => {
    setQueryHistory((prevHistory) => {
      // avoid duplicates, but allow similar structure if needed
      if (!prevHistory.includes(query)) {
        return [query, ...prevHistory];
      }
      return prevHistory;
    });
  };
  

  const handleExportCSV = () => {
    if (!resultData || resultData.length === 0) return;

    const header = Object.keys(resultData[0]).join(',');
    const rows = resultData.map(row =>
      Object.values(row).map(val => `"${String(val).replace(/"/g, '""')}"`).join(',')
    );

    const csvContent = [header, ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'query_result.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExportJSON = () => {
    const blob = new Blob([JSON.stringify(resultData, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'query_result.json');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const executeQuery = async () => {
    const startTime = performance.now();
    addToQueryHistory(queryText);
  
    try {
      setLoading(true);
      const res = await fetch(`/results/result_query_${selectedQueryId}.json`);
      if (!res.ok) throw new Error('Result file not found');
  
      const text = await res.text();
      if (!text) throw new Error('File is empty');
  
      const data = JSON.parse(text);
      setResultData(data);
  
      const endTime = performance.now();
      setExecutionTime((endTime - startTime).toFixed(2));
      setExecutedQueryId(selectedQueryId); // just to keep it in sync
    } catch (err) {
      console.error('Failed to fetch result:', err);
      setResultData([]);
      setExecutionTime(null);
    } finally {
      setLoading(false);
    }
  };  

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <div className="top-right-toggle" onClick={() => setDarkMode(prev => !prev)}>
        <img
          src={darkMode ? DarkIcon : LightIcon}
          alt="Toggle Theme"
          className="theme-toggle-icon"
        />
      </div>

      <aside className="sidebar">
        <div className="query-section query-selector-wrapper">
          <QuerySelector queries={queries} onChange={setSelectedQueryId} />
        </div>
        
        <div className="query-section query-history-wrapper">
          <QueryHistory queryHistory={queryHistory} onSelect={setQueryText} />
        </div>
      </aside>

      <main className="main-panel">
        <div className="editor-header">
          <h2>SQL Editor</h2>
        </div>

        <div className="editor-card">
          <div className="editor-card-header">
            <h3 className="editor-subtitle">Query Editor</h3>
            <div className="editor-icons">
              <button 
              className="icon-btn run-btn" 
              title="Run" 
              onClick={executeQuery}>
                <FaPlay />
              </button>
              <button className="icon-btn save-btn" title="Save" onClick={() => {
                console.log('Saving query:', queryText);
                alert('Query saved (stub)');
              }}>
                <FaSave />
              </button>
              <button className="icon-btn clear-btn" title="Clear" onClick={() => setClearEditor(prev => !prev)}>
                <FaTrash />
              </button>
            </div>
          </div>

          <QueryEditor
            query={queryText}
            onChange={(text) => setQueryText(text)}
            clearTrigger={clearEditor}
            
          />
        </div>

        <div className="output-section">
          <div className="output-header">
            <div className="output-header-top">
            <div className="output-heading-wrapper">
                <h3 className="output-heading">Output</h3>
                {executionTime && (
                  <span className="execution-time">⏱ {executionTime} ms</span>
                )}
              </div>
              <div className="export-icon-wrapper">
                <button
                  className="icon-btn export-icon"
                  onClick={() => setShowExportMenu(!showExportMenu)}
                  title="Export Data"
                >
                  <FaDownload />
                </button>

                {showExportMenu && (
                  <div className="export-dropdown">
                    <button onClick={handleExportCSV}>Export as CSV</button>
                    <button onClick={handleExportJSON}>Export as JSON</button>
                  </div>
                )}
              </div>
            </div>

            <div className="tab-bar">
              <button className={activeTab === 'table' ? 'active' : ''} onClick={() => setActiveTab('table')}>Table</button>
              <button className={activeTab === 'json' ? 'active' : ''} onClick={() => setActiveTab('json')}>Raw JSON</button>
              <button className={activeTab === 'meta' ? 'active' : ''} onClick={() => setActiveTab('meta')}>Metadata</button>
            </div>
          </div>

          <div className="output-card">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                {activeTab === 'table' && <ResultTable data={resultData} />}
                {activeTab === 'json' && <pre className="raw-json">{JSON.stringify(resultData, null, 2)}</pre>}
                {activeTab === 'meta' && <MetadataView data={resultData} />}
               </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

             
