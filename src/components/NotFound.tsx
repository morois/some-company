import { Box, styled, Typography } from '@mui/material';

const NotFound404 = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

const Title = styled(Typography)`
  font-family: 'Winky Sans', sans-serif;
`;

function NotFound() {
  return (
    <NotFound404>
      <Title variant="h2">404 Not Found</Title>
    </NotFound404>
  );
}

export default NotFound;
