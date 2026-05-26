import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { AdminPage } from '../pages/AdminPage';
import { HomePage } from '../pages/HomePage';
import { LobbyPage } from '../pages/LobbyPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { RankingPage } from '../pages/RankingPage';
import { WalletPage } from '../pages/WalletPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'lobby', element: <LobbyPage /> },
      { path: 'wallet', element: <WalletPage /> },
      { path: 'ranking', element: <RankingPage /> },
      { path: 'admin', element: <AdminPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
