import React from 'react';
import { Box, IconButton, Stack } from '@mui/material';
import { LinkedIn, Instagram } from '@mui/icons-material';

/**
 * The Social Media component is a functional component that renders the stack of 
 * social media buttons
 * @param {*} color - hsl representation of an sRGB color
 */
const Socials = (color) => {
  return (
		<Box className='app_socials'>
			<Stack direction='column' spacing={2}>
				<IconButton sx={{ width: '40px', height: '40px', color: color}} href='https://github.com/Ja-Yao'>
					<i className='uil uil-github-alt'></i>
				</IconButton>
				<IconButton sx={{color: color}} href='https://www.linkedin.com/in/yao-j/'>
					<LinkedIn />
				</IconButton>
				<IconButton sx={{color: color}} href='https://www.instagram.com/jacobyao_/'>
					<Instagram />
				</IconButton>
			</Stack>
		</Box>
	);
}

export default Socials;