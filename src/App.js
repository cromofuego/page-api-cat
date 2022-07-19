import React from 'react'
import Card from './components/Card';
import RandomButton from './components/RandomButton';
import Navbar from './components/Navbar';
import FavoritesCards from './components/FavoritesCards';

function App() {
    return (
        <React.Fragment>
            <FavoritesCards />
            <Navbar />
            <RandomButton />
            <Card />
        </React.Fragment>
    )
}

export default App;