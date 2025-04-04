import { useNavigate } from 'react-router-dom';
import { StyledButton } from './StyledBtn';

function ContactBtn() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contacts');
  };

  return <StyledButton onClick={handleClick}>Contact Us</StyledButton>;
}

export default ContactBtn;
