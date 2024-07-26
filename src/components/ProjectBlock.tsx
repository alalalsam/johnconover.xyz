import React from 'react';
import { Box, Heading, Image, Video, Paragraph } from 'grommet';

const ProjectBlock = ({ heading, picture, video, content }) => (
	<Box
		align="center"
		justify="center"
		margin={{ top: "small" }}
		border={{ color: "active-background", side: "top", size: "small" }}
		gap="medium"
	>
		<Box align="start" justify="center" fill="horizontal">
			<Heading
				margin={{ vertical: "small" }}
				size="small"
			>
			{heading}
			</Heading>
		  
			{picture && (
				<Box margin={{ vertical: "small" }}>
					<Image src={picture} fit="cover" />
				</Box>
			)}
		  
			{video && (
				<Box margin={{ vertical: "small" }}>
					<Video controls="below" fit="cover">
					<source src={video} type="video/mp4" />
					</Video>
				</Box>
			)}
		  
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