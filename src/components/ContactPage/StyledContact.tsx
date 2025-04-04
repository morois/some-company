import { styled, Box, Typography, TextField } from '@mui/material';

export const Form = styled('form')`
  position: static;
  width: 400px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;
export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

export const Title = styled(Typography)`
  font-size: 45px;
  font-weight: 800;
  color: #222;
  margin-bottom: 40px;
  line-height: 1.2;
  margin-top: 20px;
`;

export const StyledTextField = styled(TextField)`
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
`;
