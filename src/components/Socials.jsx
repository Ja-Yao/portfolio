import React from 'react';
import { Box, IconButton, Stack } from '@mui/material';
import { GitHub, LinkedIn, Instagram } from '@mui/icons-material';


const Socials = () => {
  return (
		<Box className='app_socials' >
			<Stack direction='column' spacing={2}>
				<IconButton>
					<GitHub />
				</IconButton>
				<IconButton>
					<LinkedIn />
				</IconButton>
				<IconButton>
					<Instagram />
				</IconButton>
			</Stack>
		</Box>
	);
}

export default Socials;