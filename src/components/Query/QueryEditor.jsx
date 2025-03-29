import { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { sql } from '@codemirror/lang-sql';
import './QuerySelector.css';
import { dracula } from '@uiw/codemirror-theme-dracula'; // optional alt
import { githubLight } from '@uiw/codemirror-theme-github';
import { oneDark } from '@codemirror/theme-one-dark';

function QueryEditor({ query, onChange, clearTrigger, darkMode }) {
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
        theme={darkMode ? oneDark : githubLight}
        onChange={handleChange}
        aria-label="SQL query input"
        aria-labelledby="query-editor-label"
        role="textbox"
      />
    </div>
  );
}

export default QueryEditor;