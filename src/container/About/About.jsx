import React, { useState, useEffect} from "react";
import './About.scss';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

import { images } from '../../constants';

const abouts = [
	{
		title: "Front-End Development",
		description: "I am a strong frontend developer",
		imageTitle: "3D Geometric Digital Poster Art",
		designer: " by Anthony Gribben",
		imageUrl: images.frontend
	},
	{
		title: "UI/UX",
		description: "Creating user interfaces is my passion",
		imageTitle: "",
		designer: "",
		imageUrl: images.UX
	}
];

const About = () => {
  return (
		<>
			<Typography variant='h3' className='head-text'>
				I know that
				<span> Good Apps </span>
				<br />
				mean
				<span> Good Business</span>
			</Typography>

      <Grid container classname='app__profiles' spacing={5}>
				{abouts.map((item, index) => (
          <Grid item xs={12} md={4}>
						<Card className='app__profile-item' key={item.title + index} sx={{borderRadius: "20px"}}>
							<CardMedia component='img' src={item.imageUrl} alt={item.imageTitle + item.designer} />
							<CardContent>
								<Typography variant='body1' fontWeight='600'>
									{item.title}
								</Typography>
								<Typography variant='body1'>{item.description}</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</>
	);
}

export default About;