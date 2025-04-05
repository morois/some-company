import { styled, Box, Typography, TextField } from '@mui/material';

export const Form = styled('form')`
  position: static;
  width: 90%;
  max-width: 400px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  margin: 0 auto;

  @media (min-width: 480px) {
    width: 350px;
    padding: 30px;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
  }

  @media (min-width: 600px) {
    width: 400px;
    padding: 40px;
  }
`;

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: 20px;
`;

export const Title = styled(Typography)`
  font-size: 32px;
  font-weight: 800;
  color: #222;
  margin-bottom: 30px;
  line-height: 1.2;
  margin-top: 30px;
  text-align: center;

  @media (min-width: 480px) {
    font-size: 38px;
    margin-bottom: 35px;
    margin-top: 35px;
  }

  @media (min-width: 600px) {
    font-size: 45px;
    margin-bottom: 40px;
    margin-top: 20px;
    text-align: left;
  }
`;

export const StyledTextField = styled(TextField)`
  margin-bottom: 20px;
  width: 100%;

  & .MuiInputBase-root {
    background-color: #fff;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #000000;
      box-shadow: 0 0 0 2px rgb(255, 255, 255);
    }
  }

  & .MuiInputLabel-root {
    color: #555;
    &.Mui-focused {
      color: #000000;
    }
  }

  &:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: #000000;
  }

  & .MuiInputBase-input {
    color: #333;
  }

  @media (min-width: 480px) {
    margin-bottom: 25px;
  }
`;
