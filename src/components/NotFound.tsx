import { Box, styled, Typography } from '@mui/material';

const NotFound404 = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

function NotFound() {
  return (
    <NotFound404>
      <Typography variant="h2">404 Not Found</Typography>
    </NotFound404>
  );
}

export default NotFound;
