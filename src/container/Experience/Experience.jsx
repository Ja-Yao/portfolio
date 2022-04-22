import React, {useState} from 'react';
import './Experience.scss';
import {Box, Button, Modal, Stack, Tab, Tabs, Typography} from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import {BCDesc} from '../../constants';

/**
 * The Experience component is a functional component that renders a timeline of my Education and
 * professional background
 */
const Experience = () => {
	const [value, setValue] = useState('one');
	const [open, setOpen] = useState(false);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleModalChange = event => {
		event.preventDefault();
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Box className='app__experience' id='experience'>
			<Typography variant='h3' fontFamily={'Alfa Slab One'} sx={{color: 'var(--title-color)'}}>
				Experience
			</Typography>
			<Box id='experience-tabs'>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label='experience tabs'
					sx={{textColor: 'var(--first-color)', fontWeight: 'var(--font-semi-bold)'}}
				>
					<Tab value='one' label='education' sx={{borderRadius: '15px'}} />
					<Tab value='two' label='industry' sx={{borderRadius: '15px'}} />
				</Tabs>
			</Box>
			{value === 'one' ? (
				// Education Timeline
				<Timeline>
					<TimelineItem sx={{paddingLeft: '3rem'}}>
						<TimelineSeparator>
							<TimelineDot color='primary' />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>
							<Box width={'30px'}>
								<Typography
									varint='h6'
									fontSize={'var(--normal-font-size)'}
									fontWeight={'var(--font-semi-bold)'}
									sx={{width: '150px'}}
								>
									Essex High School
								</Typography>
								<Typography variant='body2' fontSize={'var(--small-font-size)'} sx={{width: '150px'}}>
									Essex Junction, VT
								</Typography>
								<Stack direction='row' spacing={1} sx={{width: '300px'}}>
									<i className='uil uil-calender'></i>
									<Typography variant='body2' fontSize={'var(--small-font-size)'}>
										2015-2019
									</Typography>
								</Stack>
							</Box>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem sx={{paddingLeft: '3rem'}}>
						<TimelineSeparator>
							<TimelineDot color='primary' />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>
							<Box width={'30px'}>
								<Typography
									varint='h6'
									fontSize={'var(--normal-font-size)'}
									fontWeight={'var(--font-semi-bold)'}
									sx={{width: '300px'}}
								>
									Swinburne University of Technology
								</Typography>
								<Typography variant='body2' fontSize={'var(--small-font-size)'} sx={{width: '150px'}}>
									Melbourne, VIC, AU
								</Typography>
								<Stack direction='row' spacing={1} sx={{width: '300px'}}>
									<i className='uil uil-calender'></i>
									<Typography variant='body2' fontSize={'var(--small-font-size)'}>
										July-November 2019
									</Typography>
								</Stack>
							</Box>
						</TimelineContent>
					</TimelineItem>
					<TimelineItem sx={{paddingLeft: '3rem'}}>
						<TimelineSeparator>
							<TimelineDot color='primary' />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>
							<Box width={'30px'}>
								<Typography
									varint='h6'
									fontSize={'var(--normal-font-size)'}
									fontWeight={'var(--font-semi-bold)'}
									sx={{width: '300px'}}
								>
									Northeastern University
								</Typography>
								<Typography variant='body2' fontSize={'var(--small-font-size)'} sx={{width: '150px'}}>
									Boston, MA
								</Typography>
								<Stack direction='row' spacing={1} sx={{width: '300px'}}>
									<i className='uil uil-calender'></i>
									<Typography variant='body2' fontSize={'var(--small-font-size)'}>
										2019-2024
									</Typography>
								</Stack>
							</Box>
						</TimelineContent>
					</TimelineItem>
				</Timeline>
			) : (
					// Industry Timeline
				<Timeline>
					<TimelineItem sx={{paddingLeft: '3rem'}}>
						<TimelineSeparator>
							<TimelineDot color='primary' />
							<TimelineConnector />
						</TimelineSeparator>
						<TimelineContent>
							<Box width={'30px'}>
								<Typography
									varint='h6'
									fontSize={'var(--normal-font-size)'}
									fontWeight={'var(--font-semi-bold)'}
									sx={{width: '300px'}}
								>
									Black Cape, Inc.
								</Typography>
								<Typography variant='body2' fontSize={'var(--small-font-size)'} sx={{width: '150px'}}>
									Arlington, VA
								</Typography>
								<Stack direction='row' spacing={1} sx={{width: '300px'}}>
									<i className='uil uil-calender'></i>
									<Typography variant='body2' fontSize={'var(--small-font-size)'}>
										May-December 2021
									</Typography>
								</Stack>
								<Button variant='contained' onClick={handleModalChange} sx={{color: 'var(--container-color)'}}>
									More
								</Button>
								<Modal
									open={open}
									onClose={handleClose}
									aria-labelledby='experience-modal-title'
									aria-describedby='experience-modal-description'
									sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
								>
									<Box className='app__experience-modal'>
										<Typography variant='h4' fontWeight={'var(--font-semi-bold)'}>
											BlackCape, Inc.
										</Typography>
										<Typography variant='body1' sx={{mt: '1rem', color: 'var(--text-color)', fontSize: 'var(--small-font-size)'}}>
											{`${BCDesc.first}`}
										</Typography>
										<Typography variant='body1' sx={{mt: '1rem', color: 'var(--text-color)', fontSize: 'var(--small-font-size)'}}>
											{`${BCDesc.second}`}
										</Typography>
										<Typography variant='body1' sx={{mt: '1rem', color: 'var(--text-color)', fontSize: 'var(--small-font-size)'}}>
											{`${BCDesc.third}`}
										</Typography>
									</Box>
								</Modal>
							</Box>
						</TimelineContent>
					</TimelineItem>
				</Timeline>
			)}
		</Box>
	);
};

export default Experience;
