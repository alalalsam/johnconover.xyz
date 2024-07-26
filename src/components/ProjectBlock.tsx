import React from 'react';
import { Box, Heading, Image, Video, Paragraph } from 'grommet';

interface ProjectBlockProps {
  heading: string;
  picture?: string;
  video?: string;
  content: string;
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({ heading, picture, video, content }) => (
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
				<Box margin={{ vertical: "xxlarge" }}>
					<iframe 
						width="100%" 
						height="315" 
						src={video} 
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
						title={heading}
					></iframe>
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