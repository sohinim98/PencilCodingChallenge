import React, { useState, createContext } from 'react';

// Note - using a class component to utilize props.children

export const ContentContext = createContext(['', () => {}]);
// export const SetContentContext = createContext(null);

const ContentProvider = (props) => {
  const [content, setContent] = useState('this is our default content');
  return (
      <ContentContext.Provider value={[content, setContent]}>
        {props.children}
      </ContentContext.Provider>
  );
}

export default ContentProvider;
