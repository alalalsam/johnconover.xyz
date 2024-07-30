import React, {useEffect, useState } from 'react';
import { Box, Heading, Image, Video, Paragraph } from 'grommet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecursiveComponent from './RecursiveComponent'

interface ProjectBlockProps {
  heading: string;
  showLiveView?: boolean;
  picture?: string;
  video?: string;
  content: string | string[];
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({ heading, showLiveView, picture, video, content }) => {
	const [currentUrl, setCurrentUrl] = useState('');
	
	useEffect(() => {
		if(showLiveView){
			setCurrentUrl(window.location.href);
		}
	}, [showLiveView]);

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
					<Switch>
						<Route path="/recursive-embed">
							<RecursiveEmbed />
						</Route>
						<Route path="/">
							<Box align="center" justify="center" pad="large">
								<RecursiveEmbed />
							</Box>
						</Route>
					</Switch>
				</Router>
				
				{showLiveView && (
					<LiveFeed src={"https://johnconover.xyz"} title="Live View" />
				)}
				/*
				{showLiveView && currentUrl && (
					<Box
						margin = {{ vertical: "small" }}
						width="100%"
						style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}
					>
						<iframe
							src={"https://johnconover.xyz"}
							frameBorder = "0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								width: '100%',
								height: '100%'
							}}
							title="Live View"
						></iframe>
					</Box>
				)}
				*/
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