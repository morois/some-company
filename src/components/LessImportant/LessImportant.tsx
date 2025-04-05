import ContactBtn from '../ContactBtn/ContactBtn';
import {
  StyledContainer,
  Title,
  StyledContactBtn,
} from './StyledLessImportant';

function LessImportant() {
  return (
    <StyledContainer>
      <Title>Less important title</Title>
      <StyledContactBtn>
        <ContactBtn />
      </StyledContactBtn>
    </StyledContainer>
  );
}

export default LessImportant;
