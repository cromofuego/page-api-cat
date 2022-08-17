import React from 'react';
import { RandomCard } from '../pages/RandomCard';
import { Navbar } from '../components/Navbar';
import { FavoritesCards } from '../pages/FavoritesCards';
import { NotFound } from '../pages/NotFound';
import { HashRouter, Route, Routes } from 'react-router-dom';

function AppUI() {
    return (
        <React.Fragment>
            <HashRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<RandomCard />} />
                    <Route path='/favorites' element={<FavoritesCards />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </HashRouter>
        </React.Fragment>
    )
}

export default AppUI;