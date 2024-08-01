import React, {useEffect, useState } from 'react';
import { Box, Heading, Image, Video, Paragraph } from 'grommet';
import RecursiveEmbed from './RecursiveEmbed';
import ReactMarkdown from 'react-markdown';

interface ProjectBlockProps {
  heading: string;
  recursiveWindow?: boolean;
  picture?: string;
  video?: string;
  content?: string | string[];
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({ heading, recursiveWindow, picture, video, content }) => {

	return (
		<Box
			align="center"
			justify="center"
			margin={{ top: "large" }}
			border={{ color: "active-background", side: "top", size: "medium" }}
			gap="large"
		>
			<Box align="start" justify="center" fill="horizontal">
				<Heading
					margin={{ vertical: "small" }}
					size="small"
				>
				{heading}
				</Heading>
			
				{recursiveWindow && (
					<RecursiveEmbed />
				)}
				
				{picture && (
					<Box margin={{ vertical: "small" }}>
						<img src={picture} style={{ maxWidth: '100%'}} />
					</Box>
				)}
			  
				{video && (
					<Box
					  margin={{ vertical: "small" }}
					  width="100%" // Full width
					  style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }} // 16:9 aspect ratio
					>
						<iframe 
							src={video} 
							frameBorder="0" 
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
			  
				{Array.isArray(content) ? (
					content.map((paragraph, index) => (
						<Paragraph
							key={index}
							size="large"
							margin={{ vertical: "xsmall" }}
							fill
							color="text-paragraph"
						>
						<ReactMarkdown>{paragraph}</ReactMarkdown>
						</Paragraph>
					))
				) : (
					<Paragraph
						size="large"
						margin={{ vertical: "xsmall" }}
						fill
						color="text-paragraph"
					>
						{content}
					</Paragraph>
				)}
				
			</Box>
		</Box>
	);
};

export default ProjectBlock;