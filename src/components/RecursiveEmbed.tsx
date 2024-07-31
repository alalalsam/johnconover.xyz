import React from 'react';
import { Box } from 'grommet';

const RecursiveEmbed: React.FC<{ depth?: number, maxDepth?: number }> = ({ depth = 0, maxDepth =  }) => {
	if (depth >= maxDepth) {
		return null; // Stop recursion if maxDepth is reached or exceeded
	}
	
	return (
		<Box style={{ width: '780px', height: '400px' }} pad="medium" border={{ color: 'brand', size: 'small' }} overflow="hidden">
			<iframe
				src={`https://johnconover.xyz?depth=${depth + 1}&maxDepth=${maxDepth}`}
				style={{ width: '100%', height: '100%', border: 'none' }}
				title="Recursive Embed"
			/>
		</Box>
	);
};

export default RecursiveEmbed;
