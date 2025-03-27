// src/components/QueryEditor.jsx
import { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { sql } from '@codemirror/lang-sql';
import './QuerySelector.css';
import { dracula } from '@uiw/codemirror-theme-dracula'; // optional alt
import { githubLight } from '@uiw/codemirror-theme-github';

function QueryEditor({ query, onChange, clearTrigger, onTriggerHistory }) {
  const [value, setValue] = useState(query);

  useEffect(() => {
    setValue(query);
  }, [query]);

  useEffect(() => {
    if (clearTrigger) setValue('');
  }, [clearTrigger]);

  const handleChange = (val, viewUpdate) => {
    console.log("Editor change:", val);
    setValue(val);
    onChange(val); // send change to parent
  };

  return (
    <div className="query-editor">
      <CodeMirror
        value={value}
        height="200px"
        extensions={[sql()]}
        onChange={handleChange}
      />
    </div>
  );
}

export default QueryEditor;