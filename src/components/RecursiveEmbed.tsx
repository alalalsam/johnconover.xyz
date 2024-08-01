import React from 'react';
import { Box } from 'grommet';

const RecursiveEmbed: React.FC<{ depth?: number, maxDepth?: number }> = ({ depth = 0, maxDepth = 1 }) => {
  if (depth >= maxDepth) {
    return (
      <Box style={{ width: '780px', height: '400px' }} pad="medium" border={{ color: 'brand', size: 'small' }} overflow="hidden">
        <img
          src={"https://cdn1.epicgames.com/ue/product/Screenshot/screenshot011-1920x1080-8ffe58d64e3fe6a5c4c20be015fc098e.png?resize=1&w=1920"}
          style={{ maxWidth: '100%' }}
          alt="Recursion End"
        />
      </Box>
    );
  }

  const nextDepth = depth + 1;
  const iframeSrc = `https://johnconover.xyz?depth=${nextDepth}&maxDepth=${maxDepth}`;

  console.log(`Rendering iframe with src: ${iframeSrc}`);

  return (
    <Box style={{ width: '780px', height: '400px' }} pad="medium" border={{ color: 'brand', size: 'small' }} overflow="hidden">
      <iframe
        src={iframeSrc}
        style={{ width: '100%', height: '100%', border: 'none' }}
        title={`Recursive Embed Depth ${depth}`}
      />
    </Box>
  );
};

export default RecursiveEmbed;
