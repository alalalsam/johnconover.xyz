import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';

const ProjectBlock = ({ heading, content, mobileHeadingLevel = 2 }) => (
  <Box
    align="center"
    justify="center"
    margin={{ top: "small" }}
    border={{ color: "active-background", side: "top", size: "small" }}
    gap="medium"
  >
    <Box align="start" justify="center" fill="horizontal">
      <Heading
        level={mobileHeadingLevel}
        margin={{ vertical: "small" }}
        size="medium"
      >
        {heading}
      </Heading>
      <Paragraph
        size="large"
        margin={{ vertical: "xsmall" }}
        fill
        color="text-paragraph"
      >
        {content}
      </Paragraph>
    </Box>
  </Box>
);

export default ProjectBlock;
