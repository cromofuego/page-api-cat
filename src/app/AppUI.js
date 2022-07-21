import React from 'react';
import { RandomCard } from '../pages/RandomCard';
import { Navbar } from '../components/Navbar';
import { FavoritesCards } from '../pages/FavoritesCards';
import { NotFound } from '../pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function AppUI() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/page-api-cat/' element={<RandomCard />} />
                    <Route path='/favorites' element={<FavoritesCards />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default AppUI;