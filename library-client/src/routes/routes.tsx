import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import BookDetailsPage from "../pages/BookDeatils/BookDetailsPage";
import Layout from "../pages/Layout/LayoutPage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";
import DeveloperSettings from "../pages/SettingsPage/DeveloperSettings/DeveloperSettings";
import AccessSettings from "../pages/SettingsPage/AccessSettings/AccessSettings";
import ManageSettings from "../pages/SettingsPage/ManageSettings/ManageSettings";
import PreferencesSettings from "../pages/SettingsPage/PreferencesSettings/PreferencesSettings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'books/:genre/:bookId',
        element: <BookDetailsPage />
      },
      {
        path: 'settings',
        element: <SettingsPage />,
        children: [
          {
            path: 'developer',
            element: <DeveloperSettings />
          },
          {
            path: 'access',
            element: <AccessSettings />
          },
          {
            path: 'management',
            element: <ManageSettings />
          },
          {
            path: 'preferences',
            element: <PreferencesSettings />
          }
        ]
      }
    ]
  },
])