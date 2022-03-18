import React, {useState} from 'react';
import './Navbar.scss';
import {
	Box,
	Button,
	ClickAwayListener,
	IconButton,
	List,
	ListItem,
	Stack,
	SwipeableDrawer,
	useTheme
} from '@mui/material';
import {pages} from '../../constants/pages';
import {Menu, ModeNightOutlined} from '@mui/icons-material';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
	iconFill: {
		color: 'var(--scroll-bar-color)',
		'&:hover': {
			color: 'var(--first-color)'
		},
		transition: 'all 0.3s ease-in-out'
	}
});

const Navbar = () => {
	const theme = useTheme();
	const classes = useStyles();
	const [state, setState] = useState(false);

	const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

	const toggleDrawer = () => {
		setState(!state);
	};

	const list = () => (
		<ClickAwayListener onClickAway={toggleDrawer}>
			<Box sx={{width: 250}} role='presentation' onClick={toggleDrawer} onKeyDown={toggleDrawer}>
				<List>
					{pages.map((text, index) => (
						<ListItem key={text} sx={{width: '100%'}}>
							<Button
								variant='text'
								onClick={() => document.getElementById(`${text.toLowerCase()}`).scrollIntoView(true, {behavior: 'smooth'})
								}
								href={text === 'Home' ? `#` : `#${text}`}
								sx={{color: theme.palette.primary.main}}
							>
								{text}
							</Button>
						</ListItem>
					))}
				</List>
			</Box>
		</ClickAwayListener>
	);

	return (
		<Box className='app__navbar'>
			<Box className='app__navbar-links'>
				<Button
					variant='text'
					onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
					href='#'
					sx={{fontWeight: 600}}
				>
					Jacob
				</Button>
				<Stack direction='row' spacing={5}>
					{pages.map(page => (
						<Button
							key={page}
							variant='text'
							onClick={() => document.getElementById(`${page.toLowerCase()}`).scrollIntoView(true, {behavior: 'smooth'})
							}
							href={page === 'Home' ? `#` : `#${page}`}
							id={`app__navbar-${page}-button`}
						>
							{page}
						</Button>
					))}
					<IconButton
						variant='text'
						// onClick={}
						id='app__navbar-night-mode-button'
						className={classes.iconFill}
					>
						<ModeNightOutlined />
					</IconButton>
				</Stack>
			</Box>
			<Box className='app__navbar-menu'>
				<IconButton onClick={toggleDrawer}>
					<Menu color='primary' />
				</IconButton>
				<SwipeableDrawer
					disableBackdropTransition={!iOS}
					disableDiscovery={iOS}
					anchor='right'
					open={state}
					onClose={toggleDrawer}
					onOpen={toggleDrawer}
				>
					{list('right')}
				</SwipeableDrawer>
			</Box>
		</Box>
	);
};

export default Navbar;
