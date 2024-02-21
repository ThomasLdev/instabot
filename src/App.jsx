import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from 'components/pages/Home';
import Logs from 'components/pages/Logs';
import Settings from 'components/pages/Settings';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faLayerGroup, faSliders, faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faLayerGroup, faUser, faSliders);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/logs',
        element: <Logs />,
    },
    {
        path: '/settings',
        element: <Settings />,
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
