import React from 'react';
import { BrowserRouter as Router, Routes, Route, useSearchParams } from 'react-router-dom';
import { Box } from 'grommet';
import RecursiveEmbed from './RecursiveEmbed';

const RecursiveComponent: React.FC = () => {
  const [searchParams] = useSearchParams();
  const depth = parseInt(searchParams.get('depth') || '0', 10);
  const maxDepth = parseInt(searchParams.get('maxDepth') || '3', 10);

  return <RecursiveEmbed depth={depth} maxDepth={maxDepth} />;
  
}
  
export default RecursiveComponent;