import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../providers/UserProvider';
import { ContentContext } from '../../providers/ContentProvider';
import { saveContent, getUserDocument } from '../../firebase';
import logo from '../../assets/medium-logo.png'
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
      if(onLoadDocument.content !== undefined && onLoadDocument.content !== '<p><br></p>')
      setContent(onLoadDocument.content)
      })()
    }, [setContent, user.uid]);

    const handleChange = (text, medium) => {
      setContent(text);
      saveContent(user, text);
    }
    return (
      <div className="text-editor">
        <img className="text-editor--logo" src={logo} alt="Medium Editor logo" />
        <h2 className="text-editor--header">Editor</h2>
        <Editor className="text-editor--viewport" text={content} onChange={handleChange} options={{ toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote'] } }}/>
      </div>
    );
};

export default TextEditor;
