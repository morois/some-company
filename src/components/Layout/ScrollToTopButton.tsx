import { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return visible ? (
    <Fab
      color="inherit"
      onClick={scrollToTop}
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 15,
        zIndex: 1000,
      }}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  ) : null;
};

export default ScrollToTopButton;
