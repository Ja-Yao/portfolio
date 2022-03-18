import React from "react";
import "./Header.scss";
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { Box, Button, Typography } from '@mui/material';
import Socials from '../../components/Socials';

const Header = () => {

	return (
		<Box id='home' className='app__header app__flex' sx={{gap: 3}}>
			<motion.div
				whileInView={{x: [-100, 0], y: [100, 100], opacity: [0, 1]}}
				transition={{duration: 0.5, delay: 0.25}}
				className='app__header-info'
			>
				<Socials color={ 'var(--first-color)'}/>
			</motion.div>
			<motion.div
				whileInView={{ y: [-100, -100], opacity: [0, 1] }}
				transition={{ duration: 1, delay: 0.75 }}
				className='app__header-badge'
			>
				<Box marginBottom={'0.75rem'}>
					<Typography variant='h2' fontFamily={'Alfa Slab One'} className='app__header-title'>
						Hi, I'm Jacob
					</Typography>
					<Typography variant='h4' sx={{fontWeight: 500, color: 'var(--text-color)'}}>
						Computer Engineering Student
					</Typography>
				</Box>
				<Box>
					<Typography variant='body1' marginBottom={'1rem'} sx={{color: 'var(--text-color)'}}>
						Primarily experienced in frontend development and web design.
					</Typography>
					<Button
						variant='contained'
						onClick={() => document.getElementById('contact').scrollIntoView(true, {behavior: 'smooth'})}
						href='#Contact'
						sx={{borderRadius: '18px', height: '50px', color: 'var(--container-color)'}}
					>
						Contact Me
						<i className="uil uil-message send-icon"></i>
					</Button>
				</Box>

				<Box marginTop={'5rem'} direction='row'>
					<i className='uil uil-mouse-alt'></i>
					<span>Scroll Down</span>
					<i className='uil uil-arrow-down'></i>
				</Box>
			</motion.div>

			<motion.div
				whileInView={{ x: [-100, 50], y: [-100, -100], opacity: [0, 1] }}
				transition={{ duration: 1.5, delay: 1 }}
			>
				<img id='portrait-img' src={images.portrait} alt='header-portrait' height='750px' width='750px' />
			</motion.div>
		</Box>
	);
};

export default Header;
