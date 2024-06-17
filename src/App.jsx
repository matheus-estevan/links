import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { GlobalStyle } from "./Global.styled"
import { ThemeProvider } from 'styled-components';
import { Theme } from './Global.styled';

const router = createBrowserRouter([
    {
     path: "/",
     element: <Home />
    },
  
])

export default function App() {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <RouterProvider router={router}/>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}