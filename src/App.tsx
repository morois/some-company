import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import ContactPage from './components/ContactPage/ContactPage';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="contacts" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
