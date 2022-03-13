import React, {useState} from "react";
import "./Navbar.scss";
import {motion} from "framer-motion";
import {Box, Button, IconButton, Stack} from "@mui/material";
import {pages} from "../../constants/pages";
import {Close, Menu} from "@mui/icons-material";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = e => {
		e.preventDefault();
		setOpen(true);
	};

	const handleClose = e => {
		e.preventDefault();
		setOpen(false);
	};

	return (
		<nav className='app__navbar'>
			<div className='app__navbar-logo'>{/* <img /> */}</div>
			<Box className='app__navbar-links'>
				<Stack direction='row' spacing={5}>
					{pages.map(page => (
						<Button key={page} variant='text' href={`#${page}`} id={`app__navbar-${page}-button`}>
							{page}
						</Button>
					))}
				</Stack>
			</Box>

			<Box className='app__navbar-menu'>
				<IconButton onClick={handleOpen}>
					<Menu />
				</IconButton>

				{open && (
					<motion.div whileInView={{x: [250, 0]}} transition={{duration: 0.85, ease: "easeOut"}}>
						<Box>
							<IconButton onClick={handleClose}>
								<Close />
							</IconButton>
							<ul>
								{pages.map(page => (
									<li>
										<Button key={page} variant='text' href={`#${page}`} id={`app__navbar-${page}-button`}>
											{page}
										</Button>
									</li>
								))}
							</ul>
						</Box>
					</motion.div>
				)}
			</Box>
		</nav>
	);
};

export default Navbar;
