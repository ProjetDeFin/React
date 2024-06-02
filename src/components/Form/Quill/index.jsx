import React, { useEffect, useRef, useCallback } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

export default function Quill({ width = 500, height = 300, value, onChange, name = null }) {
    const { quill, quillRef } = useQuill();
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

    return (
        <div style={{ width, height }}>
            <div ref={quillRef} id />
        </div>
    );
}
