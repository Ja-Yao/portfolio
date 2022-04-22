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
import {Menu} from '@mui/icons-material';

/**
 * The Navbar component is a functional component that renders the website navbar
 */
const Navbar = () => {
	const theme = useTheme();

	// state of the hamburger menu
	const [state, setState] = useState(false);

	// handles compatibility of hamburger menu for iOS devices
	const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

	const toggleDrawer = () => {
		setState(!state);
	};

	/**
	 * Unordered list of navigation options
	 * @returns the hamburger menu list
	 */
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
