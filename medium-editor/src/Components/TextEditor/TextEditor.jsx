import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../providers/UserProvider';
import { ContentContext } from '../../providers/ContentProvider';
import { saveContent, getUserDocument } from '../../firebase';
import Editor from 'react-medium-editor';


import './TextEditor.scss';

require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

const TextEditor = () => {
    const user = useContext(UserContext);

    const [content, setContent] = useContext(ContentContext);

    useEffect(() => {
      (async () => {
      let onLoadDocument = await getUserDocument(user.uid);
      setContent(onLoadDocument.content)
      })()
    }, [setContent, user.uid]);

    const handleChange = (text, medium) => {
      setContent(text);
      saveContent(user, text);
    }
    return (
      <div className="app">
        <h1>Medium Edtor</h1>
        <h2>Editor</h2>
        <Editor text={content} onChange={handleChange} options={{ toolbar: { buttons: ['bold', 'italic', 'underline'] } }}/>
      </div>
    );
};

export default TextEditor;
