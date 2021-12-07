import React, { useState } from 'react';
import {
	Container, Toolbar, IconButton, Typography, AppBar, Box, Button, Dialog,
	DialogTitle, DialogContent, TextField, DialogActions
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { useStyles } from '../Styles/Styles';

const NavBar = () => {
	const classes = useStyles ();
	const [open, setOpen] = useState (false);
	const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

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
						<Button color='inherit' variant='outlined' onClick={handleClickOpen}>Log In</Button>

						<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
							<DialogTitle id="form-dialog-title">Log in</DialogTitle>
							<DialogContent>
								<DialogContent>Log in to see videos</DialogContent>
								<TextField
									autoFocus
									margin="dense"
									id="name"
									label="Email Adress"
									type="email"
									fullWidth
								/>
								<TextField
									autoFocus
									margin="dense"
									id="pass"
									label="Password "
									type="email"
									fullWidth
								/>
							</DialogContent>
							<DialogActions>
								<Button onClick={handleClose} color="primary">Cancel</Button>
								<Button onClick={handleClose} color="primary">Log in</Button>
							</DialogActions>
						</Dialog>

					</Box>
					<Button color='secondary' variant='contained'>Sign Up</Button>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default NavBar;
