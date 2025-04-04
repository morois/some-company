import Video from '../Video';
import Cards from '../Cards/Cards';
import LessImportant from '../LessImportant/LessImportant';
import {
  StyledContainer,
  StyledBox,
  LeftColumn,
  Title,
  RightColumn,
  Text,
  Important,
} from './StyledMainPage';

function MainPage() {
  return (
    <StyledContainer>
      <StyledBox>
        <LeftColumn>
          <Title>
            Most <Important>important</Important> title on the page
          </Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum ultrices.
          </Text>
        </LeftColumn>
        <RightColumn>
          <Video />
        </RightColumn>
      </StyledBox>
      <Cards />
      <LessImportant />
    </StyledContainer>
  );
}

export default MainPage;
