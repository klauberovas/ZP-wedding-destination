import { React } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { CalculatePage } from './pages/CalculatePage';
import { ContactPage } from './pages/ContactPage';
import { PackagePage } from './pages/PackagePage';
import { ReferencePage } from './pages/ReferencePage';
import { ErrorPage } from './pages/ErrorPage';
import './global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'package',
        element: <PackagePage />,
      },
      {
        path: 'wedding-calculate',
        element: <CalculatePage />,
      },
      {
        path: 'reference',
        element: <ReferencePage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
