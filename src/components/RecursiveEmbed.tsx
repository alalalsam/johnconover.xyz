import React from 'react';
import { Box } from 'grommet';

const RecursiveEmbed: React.FC<{ depth?: number, maxDepth?: number }> = ({ depth = 0, maxDepth = 3 }) => {
	if (depth > maxDepth) {
		return null; // Stop recursion if maxDepth is exceeded
	}

	return (
		<Box pad="medium" border={{ color: 'brand', size: 'small' }} overflow="hidden">
			<iframe
				src={`https://johnconover.com/RecursiveComponent?depth=${depth + 1}&maxDepth=${maxDepth}`}  // Adjust URL as needed
				style={{ width: '100%', height: '100%', border: 'none' }}
				title="Recursive Embed"
			/>
		</Box>
	);
};

export default RecursiveEmbed;