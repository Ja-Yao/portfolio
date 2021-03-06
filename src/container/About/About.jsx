import React from 'react';
import './About.scss';
import { Box, Button, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import {VisibilityRounded} from '@mui/icons-material';
import { storage } from '../../client';
import {getDownloadURL, ref} from 'firebase/storage';
import { images } from '../../constants';

/**
 * The About component is a functional component that renders a box containing information about me
 */
const About = () => {

	/**
	 * Handles the pdf viewer in browser
	 * @param {*} e - event that triggered the function call
	 */
	const handleView = async (e) => {
		e.preventDefault();
		const pdf = await getDownloadURL(ref(storage, 'Jacob-Yao-Resume.pdf'));
		window.location.href = pdf;
	}

	return (
		<Box id='about' className='app__about'>
			<Typography id='app__about-title' variant='h3' fontFamily={"Alfa Slab One"}>
				About Me
			</Typography>
			<Grid container id='app__about-content' className='container app__about-content'>
				<Grid item width='50%'>
					<img id='about-img' alt='about-section-img' src={images.portrait2} />
				</Grid>
				<Grid item className='app__about-content-item'>
					<Card elevation={0} sx={{borderRadius: "15px", backgroundColor: "var(--container-color)", ml: "3rem"}}>
						<CardContent>
							<Typography variant='body1' sx={{mb: "0.75rem"}}>
								Computer Engineering student at Northeastern University with experience, knowledge, and a passion for
								web development & UI design. Looking to further develop frontend skills and knowledge in particular, but
								am open to more full stack experience.
							</Typography>
							<Stack direction='row' spacing={4}>
								<Card
									elevation={0}
									sx={{
										maxWidth: "150px",
										backgroundColor: "var(--container-color)",
										alignItems: 'flex-start'
									}}
								>
									<CardContent sx={{paddingLeft: "0px"}}>
										<Typography variant='h6' sx={{fontWeight: "var(--font-semi-bold)"}}>
											5+
										</Typography>
										<Typography variant='body2' sx={{fontWeight: "var(--font-medium)"}}>
											Years coding experience
										</Typography>
									</CardContent>
								</Card>
								<Card
									elevation={0}
									sx={{
										maxWidth: "150px",
										backgroundColor: "var(--container-color)"
									}}
								>
									<CardContent sx={{paddingLeft: "0px"}}>
										<Typography variant='h6' sx={{fontWeight: "var(--font-semi-bold)"}}>
											1
										</Typography>
										<Typography variant='body2' sx={{fontWeight: "var(--font-medium)"}}>
											Year front-end experience
										</Typography>
									</CardContent>
								</Card>
								{/* <Card
									elevation={0}
									sx={{
										borderRadius: '15px',
										maxWidth: '200px',
										backgroundColor: 'var(--container-color)'
									}}
								>
									<CardContent>
										<Typography variant='h6' sx={{fontWeight: 'var(--font-semi-bold)'}}>
											1
										</Typography>
										<Typography variant='body2' sx={{fontWeight: 'var(--font-medium)'}}>
											Companies worked
										</Typography>
									</CardContent>
								</Card> */}
							</Stack>
							<Button
								variant='contained'
								onClick={e => handleView(e)}
								sx={{
									mt: "0.75rem",
									borderRadius: "15px",
									backgroundColor: "var(--first-color)",
									color: "var(--container-color)"
								}}
							>
								View Resum??
								<VisibilityRounded sx={{ml: "0.75rem"}} />
							</Button>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
};

export default About;
