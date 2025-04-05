import { styled, Box } from '@mui/material';
import YouTube from 'react-youtube';

const VideoWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingBottom: '56.25%',
  height: 0,
  overflow: 'hidden',
  width: '100%',
  maxWidth: '100%',
}));

const StyledYouTube = styled(YouTube)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

function Video() {
  return (
    <VideoWrapper>
      <StyledYouTube videoId="dQw4w9WgXcQ" />
    </VideoWrapper>
  );
}

export default Video;
