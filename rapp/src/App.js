import './App.css';
import React from 'react';
import Posts from './pages/Posts'
import {BrowserRouter, Route, Routes, createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './pages/About';
import ErrorPage from './pages/ErrorPage'
import NavBar from './components/NavBar';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Posts />,
      errorElement: <ErrorPage />,
    },
    {
      path: "about",
      element: <About />,
    },
  ]);

  return (
    <React.StrictMode>
      <div class="row">
        <NavBar/>
        <div class="col">
          1 of 3
        </div>
        <div class="col-10">
          <RouterProvider router={router} />
        </div>
        <div class="col">
          3 of 3
        </div>
      </div>
    </React.StrictMode>
  );
}

export default App;
