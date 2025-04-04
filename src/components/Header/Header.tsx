import { AppBar, Toolbar, Typography } from '@mui/material';
import ContactBtn from '../ContactBtn/ContactBtn';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useScrollDirection } from '../../hooks/useScrollDirection';

function Header() {
  const navigate = useNavigate();

  const scrollDirection = useScrollDirection();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (scrollDirection === 'down') {
      setIsVisible(false);
    } else if (scrollDirection === 'up') {
      setIsVisible(true);
    }
  }, [scrollDirection]);

  const handleClick = () => {
    navigate('/');
  };

  return (
    <AppBar
      color="inherit"
      position="sticky"
      sx={{
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out',
      }}
    >
      <Toolbar>
        <Typography
          variant="h5"
          sx={{ mr: 'auto', cursor: 'pointer' }}
          role="button"
          onClick={handleClick}
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleClick()}
        >
          Some Company
        </Typography>
        <ContactBtn />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
