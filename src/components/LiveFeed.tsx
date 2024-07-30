import React from 'react';
import { Box } from 'grommet';

interface LiveFeedProps {
  src: string;
  title: string;
}

const LiveFeed: React.FC<LiveFeedProps> = ({ src, title }) => (
  <Box
    margin={{ vertical: "small" }}
    width="100%"
    style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}
  >
    <iframe
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}
      title={title}
    ></iframe>
  </Box>
);

export default LiveFeed;