import React, {useState} from 'react';
import './Skills.scss';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Grid,
	Stack,
	Typography
} from '@mui/material';
import {ExpandMoreRounded} from '@mui/icons-material';
import {frontendTools, designTools, backendTools} from '../../constants';

const Skills = () => {
	const [isOpen, setIsOpen] = useState('panel1');

	const handleChange = panel => (event, isExpanded) => {
		event.preventDefault();
		setIsOpen(isExpanded ? panel : false);
	};

	return (
		<div className='app__skills' id='skills'>
			<Box sx={{mb: '5rem'}}>
				<Typography variant='h3' textAlign={'center'} fontFamily={'Alfa Slab One'}>
					Skills
				</Typography>
				<Typography variant='h6' textAlign={'center'} sx={{fontWeight: 'var(--font-medium)'}}>
					My technical experience
				</Typography>
			</Box>
			<Grid container className='app__skills-content' spacing={8}>
				<Grid item xs={3}>
					<Accordion
						expanded={isOpen === 'panel1'}
						onChange={handleChange('panel1')}
						elevation={1}
						sx={{backgroundColor: 'var(--container-color)'}}
					>
						<AccordionSummary expandIcon={<ExpandMoreRounded />} aria-controls='panel1bh-content' id='panel1bh-header'>
							<i className='uil uil-brackets-curly'></i>
							<Typography sx={{ml: '0.5rem'}}>Frontend Developer</Typography>
						</AccordionSummary>
						<AccordionDetails>
							{frontendTools.map((tool, index) => (
								<Box key={`app__skills-content-${tool.name}`} marginBottom='1.5rem'>
									<Stack direction='row' justifyContent={'space-between'} alignItems={'center'}>
										<Stack direction='row' spacing={1} alignItems={'center'}>
											<img id={`${tool.name}-img`} alt={`frontend-tools-${tool.name}-img`} />
											<Typography variant='body1' fontWeight={`var(--font-semi-bold)`}>
												{tool.name}
											</Typography>
										</Stack>
										<Typography variant='body1' fontWeight={`var(--font-semi-bold)`}>
											{tool.years}
										</Typography>
									</Stack>
								</Box>
							))}
						</AccordionDetails>
					</Accordion>
				</Grid>
				<Grid item xs={3}>
					<Accordion
						expanded={isOpen === 'panel2'}
						onChange={handleChange('panel2')}
						elevation={1}
						sx={{backgroundColor: 'var(--container-color)'}}
					>
						<AccordionSummary expandIcon={<ExpandMoreRounded />} aria-controls='panel1bh-content' id='panel1bh-header'>
							<i className='uil uil-swatchbook'></i>
							<Typography sx={{ml: '0.5rem'}}>Design</Typography>
						</AccordionSummary>
						<AccordionDetails>
							{designTools.map((tool, index) => (
								<Box key={`app__skills-content-${tool.name}`} marginBottom='1.5rem'>
									<Stack direction='row' justifyContent={'space-between'} alignItems={'center'}>
										<Stack direction='row' spacing={1} alignItems='center'>
											<img id={`${tool.name}-img`} alt={`design-tools-${tool.name}-img`} />
											<Typography variant='body1' fontWeight={`var(--font-semi-bold)`}>
												{tool.name}
											</Typography>
										</Stack>
										<Typography variant='body1' fontWeight={`var(--font-semi-bold)`}>
											{tool.years}
										</Typography>
									</Stack>
								</Box>
							))}
						</AccordionDetails>
					</Accordion>
				</Grid>
				<Grid item xs={3}>
					<Accordion
						expanded={isOpen === 'panel3'}
						onChange={handleChange('panel3')}
						elevation={1}
						sx={{backgroundColor: 'var(--container-color)'}}
					>
						<AccordionSummary expandIcon={<ExpandMoreRounded />} aria-controls='panel1bh-content' id='panel1bh-header'>
							<i className='uil uil-server-connection'></i>
							<Typography sx={{ml: '0.5rem'}}>Backend Developer</Typography>
						</AccordionSummary>
						<AccordionDetails>
							{backendTools.map((tool, index) => (
								<Box key={`app__skills-content-${tool.name}`} marginBottom='1.5rem'>
									<Stack direction='row' justifyContent={'space-between'} alignItems={'center'}>
										<Stack direction='row' alignItems={'center'}>
											<img id={`${tool.name}-img`} alt={`backend-tools-${tool.name}-img`} />
											<Typography variant='body1' fontWeight={`var(--font-semi-bold)`}>
												{tool.name}
											</Typography>
										</Stack>
										<Typography variant='body1' fontWeight={`var(--font-semi-bold)`}>
											{tool.years}
										</Typography>
									</Stack>
								</Box>
							))}
						</AccordionDetails>
					</Accordion>
				</Grid>
			</Grid>
		</div>
	);
};

export default Skills;
