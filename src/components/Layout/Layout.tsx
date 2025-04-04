import { Box } from '@mui/material';
import { ReactNode } from 'react';
import Header from '../Header/Header';
import ScrollToTopButton from './ScrollToTopButton';
import ScrollToTop from './ScrollToTop';
import Footer from '../Footer/Footer';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ScrollToTop />
      <Header />
      <Box sx={{ flex: 1 }}>{children}</Box>
      <Footer />
      <ScrollToTopButton />
    </Box>
  );
};

export default Layout;
