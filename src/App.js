import React, {useState} from 'react';

import {Navigate, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from '@material-ui/core';

import css from './App.module.css';

import { MainLayout } from './layouts';
import {Header, MovieDetails, Sidebar} from './components';
import { ThemeContext } from './themes/theme-context';
import { lightTheme, darkTheme } from './themes/theme';

import { LanguageProvider } from './language/language-context';
import config from './config';

const App = () => {

        const [theme, setTheme] = useState(darkTheme);

        const toggleTheme = () => {
            setTheme(theme === lightTheme ? darkTheme : lightTheme);
        };

    return (
        <Provider store={store}>
            <LanguageProvider>
                <ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Header />
                    <div className={css.mainContainer}>
                        <Sidebar />
                    <Routes>
                        <Route index element={ <Navigate to={'home'} /> } />
                        <Route path={'home'} element={<MainLayout/>}/>
                        <Route index element={ <Navigate to={'movie-details'} /> } />
                        <Route path={'movie-details'} element={<MovieDetails/>}/>
                    </Routes>
                    </div>
                </ThemeProvider>
                </ThemeContext.Provider>
            </LanguageProvider>
        </Provider>
    );
}

export {App};