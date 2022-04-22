import React, {useState, useEffect} from 'react';
import './Contact.scss';
import {Alert, Box, Button, CircularProgress, Link, Snackbar, Stack, TextField, Typography} from '@mui/material';
import {motion} from 'framer-motion';
import {collection, addDoc} from 'firebase/firestore';
import {db} from '../../client';


/**
 * Renders a form that allows users to send me a message
 */
const Contact = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isSent, setIsSent] = useState(false);
	const [isComplete, setIsComplete] = useState(false);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	useEffect(() => {
		const fieldsFilled = () => {
			if (name !== '' && email !== '' && message !== '') setIsComplete(true);
			else setIsComplete(false);
		};
		fieldsFilled();
	}, [name, email, message]);

	const handleSubmit = async e => {
		e.preventDefault();
		setIsLoading(true);
		setIsSent(false);

		await addDoc(collection(db, 'emails'), {
			name: name,
			email: email,
			message: message
		})
			.then(() => {
				setIsLoading(false);
				setIsSent(true);
			})
			.catch(error => {
				alert(error.message);
				setIsLoading(false);
				setIsSent(false);
			});

		setName('');
		setEmail('');
		setMessage('');
	};

	const handleClose = () => {
		setIsSent(false);
	};

	return (
		<motion.div
			whileInView={{y: [-80, 0], opacity: [0, 1]}}
			transition={{delay: 0.25}}
			id='contact'
			className='app__contact'
		>
			<Typography variant='h3' fontFamily={"Alfa Slab One"}>
				Contact Me
			</Typography>
			<Typography variant='h6' fontWeight={"var(--font-medium)"}>
				Feel free to reach out with any questions!
			</Typography>
			<Box width={"100%"}>
				{isSent ? (
					<Snackbar
						anchorOrigin={{vertical: "bottom", horizontal: "left"}}
						open={isSent}
						onClose={handleClose}
						autoHideDuration={5000}
					>
						<Alert onClose={handleClose} severity='success'>
							Your message has been sent!
						</Alert>
					</Snackbar>
				) : (
					<></>
				)}
				<motion.div
					id='form-motion-div'
					whileInView={{opacity: [0, 1]}}
					transition={{delay: 0.5}}
					className='app__contact-form'
				>
					<Box className='app__contact-form-container'>
						<Box id='contact-info'>
							<Stack direction={window.innerWidth < 500 ? "column" : "row"} justifyContent={"space-between"}>
								<Stack direction='row' spacing={1}>
									<i className='uil uil-phone'></i>
									<Typography variant='body1' sx={{color: "var(--text-color)"}}>
										(802) 735-7678
									</Typography>
								</Stack>
								<Stack direction='row' spacing={1}>
									<i className='uil uil-envelope'></i>
									<Link
										underline='hover'
										variant='body1'
										href='mailto:yao@ja.northeastern.edu'
										sx={{color: "var(--text-color)"}}
									>
										yao.ja@northeastern.edu
									</Link>
								</Stack>
							</Stack>
						</Box>
						<Box id='form' sx={{mt: "0.5rem"}}>
							<Stack spacing={2}>
								<TextField
									variant='outlined'
									required
									value={name}
									placeholder='Name'
									onChange={e => setName(e.target.value)}
									sx={{color: "var(--first-color)"}}
								/>
								<TextField
									variant='outlined'
									required
									value={email}
									placeholder='Email'
									onChange={e => setEmail(e.target.value)}
									sx={{color: "var(--first-color)"}}
								/>
								<TextField
									variant='outlined'
									required
									value={message}
									placeholder='Message'
									multiline={true}
									minRows={12}
									maxRows={20}
									onChange={e => setMessage(e.target.value)}
									sx={{color: "var(--first-color)"}}
								/>
							</Stack>
							<Box>
								{isComplete ? (
									<Button
										aria-label='send-email-button'
										onClick={handleSubmit}
										variant='contained'
										size='medium'
										sx={{borderRadius: "15px", mt: "0.75rem", color: "var(--container-color)"}}
									>
										Send
										<i className='uil uil-message'></i>
									</Button>
								) : isLoading ? (
									<CircularProgress sx={{color: "var(--first-color)"}} />
								) : (
									<Button
										aria-label='send-email-button'
										disabled
										variant='contained'
										size='medium'
										sx={{borderRadius: "15px", mt: "0.75rem", color: "var(--container-color)"}}
									>
										Send
										<i className='uil uil-message send-icon'></i>
									</Button>
								)}
							</Box>
						</Box>
					</Box>
				</motion.div>
			</Box>
		</motion.div>
	);
};

export default Contact;
