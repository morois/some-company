import Video from '../Video';
import Cards from '../Cards/Cards';
import LessImportant from '../LessImportant/LessImportant';
import YouTube from 'react-youtube';
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
            <Important>ВАЖНО!</Important>
          </Title>
          <Text>
            Тут должно быть видео с YouTube. Если его нет, то вы знаете что надо
            делать.
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
