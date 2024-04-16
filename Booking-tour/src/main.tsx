import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import HomePage from '@/pages/Home-page.tsx';
// import {Provider} from "react-redux"
// import {store} from "@/lib/redux/store" 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <HomePage/>
      },
      // {
      //   path: "/Profile",
      //   element: <Profile/>
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Provider store={store}> */}

    <RouterProvider router={router}></RouterProvider>
    {/* </Provider> */}
  </React.StrictMode>,
)
