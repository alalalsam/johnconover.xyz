import React from 'react';
import { Box } from 'grommet';

const RecursiveEmbed: React.FC<{ depth?: number, maxDepth?: number }> = ({ depth = 0, maxDepth = 10 }) => {
	if (depth > maxDepth) {
		return null; // Stop recursion if maxDepth is exceeded
	}
	
	return (
		<Box style={{ width: '780px', height: '400px', border: 'none' }}pad="medium" border={{ color: 'brand', size: 'small' }} overflow="hidden">
			<iframe
				src={`http://johnconover.xyz`}
				style={{ width: '100%', height: '100%', border: 'none' }}
				title="Recursive Embed"
			/>
		</Box>
	);
};

export default RecursiveEmbed;