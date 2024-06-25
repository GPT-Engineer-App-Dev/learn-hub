import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { basicSetup } from '@codemirror/basic-setup';

const CodeEditor = ({ value, onChange }) => {
  return (
    <CodeMirror
      value={value}
      height="200px"
      extensions={[javascript(), basicSetup]}
      onChange={(value) => onChange(value)}
    />
  );
};

export default CodeEditor;