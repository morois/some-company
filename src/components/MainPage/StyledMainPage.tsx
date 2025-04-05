import { styled, Container, Typography, Box } from '@mui/material';

export const StyledContainer = styled(Container)`
  padding: 16px;
  margin: 16px auto;
  max-width: 1800px;

  @media (min-width: 480px) {
    padding: 20px;
    margin: 20px auto;
  }

  @media (min-width: 768px) {
    padding: 30px;
    margin: 40px auto;
  }
`;

export const Title = styled(Typography)`
  font-family: 'Winky Sans', sans-serif;
  font-weight: 200px;
  font-size: 60px;
  color: #222;
  margin-bottom: 10px;
  line-height: 1.2;
  margin-top: 16px;
  word-break: break-word;

  @media (min-width: 480px) {
    font-size: 40px;
    margin-bottom: 12px;
    margin-top: 20px;
  }

  @media (min-width: 600px) {
    font-size: 42px;
    font-weight: 100;
    margin-top: 32px;
    margin-bottom: 16px;
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
  padding: 16px;
  background-color: #ffffff;
  gap: 20px;

  @media (min-width: 480px) {
    padding: 20px;
    gap: 24px;
  }

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
  margin-bottom: 40px;

  @media (min-width: 480px) {
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    flex: 1;
    min-width: 300px;
    order: initial;
    margin-bottom: 0;
  }
`;

export const RightColumn = styled(Box)`
  flex: 1 1 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 120px;
  text-align: center;
  order: 2;
  max-width: 100%;
  overflow: hidden;

  iframe {
    max-width: 100%;
    max-height: 100%;
  }

  @media (min-width: 480px) {
    min-height: 150px;
  }

  @media (min-width: 768px) {
    flex: 1;
    justify-content: flex-end;
    min-height: 350px;
    order: initial;
  }
`;

export const Text = styled(Typography)`
  font-size: 14px;
  line-height: 1.4;
  color: #444;
  max-width: 100%;

  @media (min-width: 480px) {
    font-size: 16px;
    line-height: 1.5;
  }

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 1.6;
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
