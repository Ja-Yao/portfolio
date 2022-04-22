import React from 'react';
import './Footer.scss';
import {Box, Button, Grid, Stack, Typography} from '@mui/material';
import {pages} from '../../constants/pages';
import {CopyrightRounded} from '@mui/icons-material';
import Socials from '../../components/Socials';

/**
 * The Footer component is a functional component that renders the website footer
 */
const Footer = () => {
	return (
		<Box className='app__footer'>
			<Grid container direction='row' className='app__footer-content'>
				<Grid item>
					<Box sx={{mt: '-2rem'}}>
						<Typography varint='h1' fontSize={'var(--big-font-size)'} fontWeight={600}>
							Jacob
						</Typography>
						<Typography variant='body1'>Comuter Engineering Student</Typography>
					</Box>
				</Grid>
				<Grid item>
					<Stack direction={'row'} spacing={2}>
						{pages.map(page => (
							<Button
								key={page}
								variant='text'
								onClick={() =>
									document.getElementById(`${page.toLowerCase()}`).scrollIntoView(true, {behavior: 'smooth'})
								}
								href={page === 'Home' ? `#` : `#${page}`}
								id={`app__navbar-${page}-button`}
								sx={{color: 'var(--container-color)'}}
							>
								{page}
							</Button>
						))}
					</Stack>
					<Stack direction={'row'} spacing={1} sx={{mt: 'var(--mb-3)'}}>
						<CopyrightRounded sx={{width: '20px', height: '20px'}} />
						<Typography variant='body2'>Jacob Yao, All Rights Reserved</Typography>
					</Stack>
				</Grid>
				<Grid item>
					<Box sx={{mt: '2rem'}}>
            <Socials color={ 'var(--container-color)' }/>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Footer;
