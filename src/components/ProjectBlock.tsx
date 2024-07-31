import React, {useEffect, useState } from 'react';
import { Box, Heading, Image, Video, Paragraph } from 'grommet';
import { BrowserRouter as Router, Route, Routes, useSearchParams } from 'react-router-dom';
import RecursiveEmbed from './RecursiveEmbed'
import RecursiveComponent from './RecursiveComponent'

interface ProjectBlockProps {
  heading: string;
  recursiveWindow?: boolean;
  picture?: string;
  video?: string;
  content: string | string[];
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({ heading, recursiveWindow, picture, video, content }) => {

	
	useEffect(() => {
		if(recursiveWindow){
			//setCurrentUrl(window.location.href);
			//I want to control the display of the recursive window here
		}
	}, [recursiveWindow]);

	return (
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
			
				
				<Router>
					<Routes>
						<Route path="/RecursiveComponent" element={<RecursiveComponent />} />
						<Route
							path="/"
							element={
								<Box align="center" justify="center" pad="large">
									<RecursiveEmbed />
								</Box>
							}
						/>
					</Routes>
				</Router>
				
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
			  
				{Array.isArray(content) ? (
					content.map((paragraph, index) => (
						<Paragraph
							key={index}
							size="large"
							margin={{ vertical: "xsmall" }}
							fill
							color="text-paragraph"
						>
							{paragraph}
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