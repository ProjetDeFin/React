import React, { useEffect, useRef, useCallback } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import './index.scss';

export default function Quill({
  width = 500,
  height = 300,
  value,
  onChange,
  name = null,
  placeholder = 'Write something...',
}) {
  const { quill, quillRef } = useQuill({
    modules: {
      toolbar: {
        container: '#toolbar',
      },
    },
    placeholder: placeholder,
  });

  const debounceTimeout = useRef(null);

  const handleTextChange = useCallback(() => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      if (quill) {
        onChange(quill.root.innerHTML);
      }
    }, 500);
  }, [onChange, quill]);

  useEffect(() => {
    if (quill) {
      quill.on('text-change', handleTextChange);
    }

    return () => {
      if (quill) {
        quill.off('text-change', handleTextChange);
      }
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [quill, handleTextChange]);

  useEffect(() => {
    if (quill && quillRef.current) {
      const toolbarContainer = quillRef.current.querySelector('.ql-toolbar');
      if (toolbarContainer) {
        toolbarContainer.remove();
      }
    }
  }, [quill, quillRef]);

  return (
    <div style={{ width }}>
      <div style={{ height }} ref={quillRef} />
      <div id="toolbar">
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-underline" />
        <select className="ql-header">
          <option value="1">Heading</option>
          <option value="2">Subheading</option>
          <option value="" selected>
            Normal
          </option>
        </select>
      </div>
    </div>
  );
}
