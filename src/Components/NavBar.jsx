import React from 'react';
import { Container, Toolbar, IconButton, Typography, AppBar, Box, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { useStyles } from '../Styles/Styles';

const NavBar = () => {
	const classes = useStyles ();

	return (
		<AppBar position='static'>
			<Container>
				<Toolbar>
					<IconButton edge='start'
					    color='inherit' aria-label='menu' className={classes.menuButton}>
						<MenuIcon/>
					</IconButton>
					<Typography variant='h6' className={classes.title}>Phillip Miller</Typography>
					<Box mr={3}>
						<Button color='inherit' variant='outlined'>Log In</Button>
					</Box>
					<Button color='secondary' variant='contained'>Sign Up</Button>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default NavBar;
