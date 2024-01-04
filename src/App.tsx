import React from 'react';
import './App.css';
import { Routing } from './components/Routing/Routing'
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Routing />
    </SnackbarProvider>
  );
}

export default App;
