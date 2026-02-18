import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import AppShell from './layouts/AppShell';
import DashboardPage from './pages/DashboardPage';
import ZeiterfassungPage from './pages/ZeiterfassungPage';
import ProjektePage from './pages/ProjektePage';
import UrlaubPage from './pages/UrlaubPage';
import TeamPage from './pages/TeamPage';
import EinstellungenPage from './pages/EinstellungenPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/zeiterfassung" element={<ZeiterfassungPage />} />
          <Route path="/projekte" element={<ProjektePage />} />
          <Route path="/urlaub" element={<UrlaubPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/einstellungen" element={<EinstellungenPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
