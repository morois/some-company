import { Box, Container, styled, Typography } from '@mui/material';

export const StyledContainer = styled(Container)`
  padding: 16px;
  margin: 16px auto;
  max-width: 1800px;

  @media (min-width: 768px) {
    padding: 20px;
    margin: 30px auto;
  }
`;

export const Title = styled(Typography)`
  font-size: 60px;
  font-weight: 700;
  color: #222;
  margin-bottom: 16px;
  line-height: 1;
  margin-top: 24px;
  word-break: break-word;

  @media (min-width: 600px) {
    font-size: 42px;
    margin-top: 32px;
  }

  @media (min-width: 900px) {
    font-size: 60px;
    margin-top: 50px;
    margin-bottom: 20px;
  }
`;

export const StyledBox = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  background-color: #ffffff;
  gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    padding: 40px;
    gap: 40px;
  }

  @media (min-width: 1200px) {
    padding: 50px;
  }
`;

export const LeftColumn = styled(Box)`
  flex: 1 1 100%;
  order: 1;

  @media (min-width: 768px) {
    flex: 1;
    min-width: 300px;
    order: initial;
  }
`;

export const RightColumn = styled(Box)`
  flex: 1 1 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  text-align: center;
  order: 0;

  @media (min-width: 768px) {
    flex: 1;
    justify-content: flex-end;
    min-height: 350px;
    order: initial;
  }
`;

export const Text = styled(Typography)`
  font-size: 16px;
  line-height: 1.6;
  color: #444;
  max-width: 100%;

  @media (min-width: 480px) {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    font-size: 20px;
    max-width: 600px;
  }

  @media (min-width: 900px) {
    font-size: 22px;
  }
`;

export const Important = styled('span')`
  color: red;
  font-weight: inherit;
`;
