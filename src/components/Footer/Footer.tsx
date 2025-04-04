import { Box } from '@mui/material';
import { StyledFooter } from './StyledFooter';

function Footer() {
  return (
    <StyledFooter>
      <Box textAlign="center" p={2}>
        © 2025 Your Company
      </Box>
    </StyledFooter>
  );
}

export default Footer;
