import { Container, Grid, Box } from '@mui/material';
import { cardsData } from '../../data/cardsData';
import ContactBtn from '../ContactBtn/ContactBtn';
import { Title, CardStyle, StyledContactBtn } from './StyledCards';

function Cards() {
  return (
    <Container>
      <Title textAlign={'center'}>Also very important title</Title>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {cardsData.map((card) => {
          return (
            <Grid key={card.id} size={{ xs: 2, sm: 4, md: 4 }}>
              <CardStyle>
                <Box>
                  <h3>{card.title}</h3>
                </Box>
                <Box>
                  <p>{card.text}</p>
                </Box>
              </CardStyle>
            </Grid>
          );
        })}
      </Grid>
      <StyledContactBtn>
        <ContactBtn />
      </StyledContactBtn>
    </Container>
  );
}

export default Cards;
