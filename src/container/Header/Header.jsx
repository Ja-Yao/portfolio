import React from "react";
import "./Header.scss";
import { images } from '../../constants';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: "easeInOut"
		}
	}
};

const Header = () => (
	<Box id='home' className='app__header app__flex'>
		<motion.div whileInView={{x: [-100, 0], opacity: [0, 1]}} transition={{duration: 0.5}} className='app__header-info'>
			<div className='app__header-badge'>
				<div className='badge-cmp app__flex'>
					<span>👋</span>
					<div style={{marginLeft: 20}}>
						<Typography className='p-text'>Hello, I am</Typography>
						<Typography className='head-text'>Jacob</Typography>
					</div>
				</div>

				<div className='tag-cmp app__flex'>
					<Typography className='p-text'>Computer Engineering</Typography>
					<Typography className='p-text'>Student</Typography>
				</div>
			</div>
		</motion.div>

		<motion.div variants={scaleVariants} whileInView={scaleVariants.whileInView} className='app__header-circles'>
			{[images.mu5, images.react, images.redux].map((circle, index) => (
				<div className='circle-cmp app__flex' key={`circle-${index}`}>
					<img src={circle} alt='profile_bg' />
				</div>
			))}
		</motion.div>
	</Box>
);

export default Header;
