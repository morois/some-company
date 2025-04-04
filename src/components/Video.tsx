import YouTube from 'react-youtube';

function Video() {
  const opts = {
    height: 250,
    width: 500,
  };

  return <YouTube videoId="dQw4w9WgXcQ" opts={opts} />;
}

export default Video;
