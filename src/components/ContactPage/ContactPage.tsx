import { useState } from 'react';
import { StyledBox, Title, Form, StyledTextField } from './StyledContact';
import { Typography, Button } from '@mui/material';
import SuccsessMessage from '../SuccsessMessage/SuccsessMessage';

const EMAIL_REGREX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FormData {
  name: string;
  email: string;
  message: string;
}

function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState<string>('');
  const [serverResponse, setServerResponse] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setServerResponse('');

    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required!');
      return;
    }

    if (!EMAIL_REGREX.test(formData.email)) {
      setError('Invalid email address!');
      return;
    }

    try {
      const response = await fetch('/.netlify/functions/form-handler', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setServerResponse(data.message);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <StyledBox>
      {serverResponse ? (
        <SuccsessMessage />
      ) : (
        <>
          <Title variant="h3" fontWeight={700} mb={3}>
            Only CTA on the page
          </Title>

          <Form onSubmit={handleSubmit}>
            <StyledTextField
              fullWidth
              aria-label="Enter your name"
              margin="normal"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <StyledTextField
              fullWidth
              aria-label="Enter your email"
              margin="normal"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <StyledTextField
              fullWidth
              aria-label="Enter your message"
              margin="normal"
              label="Message"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
            {error && <Typography color="red">{error}</Typography>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: '#7d737367',
                color: '#000000',
                '&:hover': { bgcolor: '#292727', color: 'white' },
              }}
            >
              Submit
            </Button>
          </Form>
        </>
      )}
    </StyledBox>
  );
}

export default ContactPage;
