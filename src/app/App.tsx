import React from 'react';
import { I18nProvider } from 'i18n';

import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from 'routes';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle, defaultTheme } from 'styles';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { IState } from 'shared/interfaces';

const App: React.FC = () => {
    const { language } = useSelector((state: IState) => state);

    return (
        <>
            <I18nProvider locale={language}>
                <Router>
                    <ThemeProvider theme={defaultTheme}>
                        <GlobalStyle />
                        <ToastContainer />
                        <Routes />
                    </ThemeProvider>
                </Router>
            </I18nProvider>
        </>
    );
};
export default App;
