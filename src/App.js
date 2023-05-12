import { Routes, Route, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import { getBooks } from './redux/books/booksSlice';

const Layout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
