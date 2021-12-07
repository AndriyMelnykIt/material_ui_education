import React from 'react';
import { Container, Toolbar, AppBar, IconButton, Typography, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing (1)
	},
	title: {
		flexGrow: 1
	}
}));

function App () {
	const classes = useStyles ();

	return (
		<AppBar position='fixed'>
			<Container fixed>
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

export default App;
