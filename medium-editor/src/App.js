import React from 'react';
import Application from './Components/Application/Application';
import UserProvider from './providers/UserProvider';

import './App.scss';

function App() {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}
export default App;
