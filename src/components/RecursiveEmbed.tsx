import React from 'react';
import { Box } from 'grommet';

const RecursiveEmbed: React.FC<{ depth?: number, maxDepth?: number }> = ({ depth = 0, maxDepth = 2 }) => {
	if (depth >= maxDepth) {
		return (
			<Box style={{ width: '780px', height: '400px' }} pad="medium" border={{ color: 'brand', size: 'small' }} overflow="hidden">
				<iframe
					src={`https://cdn1.epicgames.com/ue/product/Screenshot/screenshot011-1920x1080-8ffe58d64e3fe6a5c4c20be015fc098e.png?resize=1&w=1920`}
					style={{ width: '100%', height: '100%', border: 'none' }}
					title="Recursive Embed"
				/>
			</Box>// Stop recursion if maxDepth is reached or exceeded
		);
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
