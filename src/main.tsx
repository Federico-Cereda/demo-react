import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { Root } from './Root';
// import DemoCounter from './pages/counter/DemoCounter';
// import { DemoList } from './pages/list/DemoList';
// import axios from 'axios';
// import { DemoListHTTP2 } from './pages/list-http/DemoListHTTP2';
// import { User } from './model/user';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
)

// Nuova configurazione Router 6.4+

// const router = createBrowserRouter ([
//     {
//         path: "/",
//         element: <Root />,
//         // loader: rootLoader,
//         children: [
//             {
//                 path: "counter",
//                 element: <DemoCounter />,
//             },
//             {
//                 path: "list",
//                 element: <DemoList />,
//             },
//             {
//                 path: "users2",
//                 element: <DemoListHTTP2 />,
//                 loader: async () => {
//                     const res = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
//                     return res.data
//                 }
//             }
//         ]
//     },
//     {
//         path: "*",
//         element: <div>page 404</div>
//     }
// ]);

// ReactDOM.createRoot(document.getElementById('root')!).render(
//     <RouterProvider router={router} />
// )
