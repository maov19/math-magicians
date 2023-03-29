import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';
import Calculator from './components/calculator';
import Quote from './components/quote';
import Home from './components/Home';

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
