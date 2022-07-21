import React from 'react';
import { CardProvider } from './context/CardContext';
import AppUI from './app/AppUI';

function App() {
    return (
        <CardProvider>
            <AppUI />
        </CardProvider>
    )
}

export default App;