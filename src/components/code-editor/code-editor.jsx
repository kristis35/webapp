import React, { useEffect, useRef } from 'react';
import { useCodeMirror } from '@uiw/react-codemirror';
import { material } from '@uiw/codemirror-theme-material';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { java } from '@codemirror/lang-java';

const extensions = [javascript(), python(), java()];

const CodeEditor = ({ value, onChange, height }) => {
  const editor = useRef();

  const { setContainer } = useCodeMirror({
    container: editor.current,
    extensions,
    theme: material,
    height: height || 'auto',
    value: value,
    onChange: onChange
  });

  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, [editor.current]);

  return <div ref={editor} />;
};

export default CodeEditor;
