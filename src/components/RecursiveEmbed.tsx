import React from 'react';
import { Box } from 'grommet';

const RecursiveEmbed: React.FC<{ depth?: number, maxDepth?: number }> = ({ depth = 0, maxDepth = 3 }) => {
	if (depth > maxDepth) {
		return null; // Stop recursion if maxDepth is exceeded
	}
	
	const nextDepthUrl = `https://johnconover.xyz/RecursiveComponent?depth=${depth + 1}&maxDepth=${maxDepth}`;
	
	return (
		<Box style={{ width: '780px', height: '400px', border: 'none' }}pad="medium" border={{ color: 'brand', size: 'small' }} overflow="hidden">
			<iframe
				src={nextDepthUrl} // Ensure this URL is correct and accessible
				//src={`https://johnconover.xyz/RecursiveComponent?depth=${depth + 1}&maxDepth=${5}`}  // Adjust URL as needed
				//src={`https://johnconover.xyz`}
				style={{ width: '100%', height: '100%', border: 'none' }}
				title="Recursive Embed"
			/>
		</Box>
	);
};

export default RecursiveEmbed;