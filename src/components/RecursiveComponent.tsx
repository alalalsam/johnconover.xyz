import React from 'react';
import { Box } from 'grommet';

const RecursiveEmbed: React.FC = () => {
  return (
    <Box pad="medium" border={{ color: 'brand', size: 'small' }} overflow="hidden">
      <iframe
        src="https://johnconover.com"  // Adjust this if needed to match the route or URL
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Recursive Embed"
      />
    </Box>
  );
};

export default RecursiveEmbed;