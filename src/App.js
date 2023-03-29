/* eslint-disable */

import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import './index.css';
import Calculator from './components/calculator';
import Quote from './components/quote';

function Layout() {
  return (
    <>
      <Outlet />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<div>Home page</div>} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
