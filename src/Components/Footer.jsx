import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const Footer = () => {
	const [value, setValue] = useState('recents');

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}
	return (
		<div>
			<Typography variant="h6" align="center" gutterBottom></Typography>
			<BottomNavigation
				value={value}
				onChange={handleChange}
			>
				<BottomNavigationAction
					label="Recents"
					value="recents"
					icon={<RestoreIcon/>}
				/>
				<BottomNavigationAction
					label="Favorites"
					value="favorites"
					icon={<FavoriteIcon/>}
				/>
				<BottomNavigationAction
					label="Nearby"
					value="nearby"
					icon={<LocationOnIcon/>}
				/>
				<BottomNavigationAction
					label="Folder"
					value="folder"
					icon={<FolderIcon/>}
				/>
			</BottomNavigation>
			<Typography align="center" color="textSecondary" component="p" variant="subtitle1">
				Phillip Miller - Leather goods
			</Typography>
		</div>
	);
}

export default Footer;
