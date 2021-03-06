import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles ((theme) => ({
	menuButton: {
		marginRight: theme.spacing (1)
	},
	title: {
		flexGrow: 1
	},
	mainFeaturesPost: {
		position: 'relative',
		color: theme.palette.common.white,
		marginBottom: theme.spacing (4),
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center'
	},
	overlay: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundOverlay: 'rgba(0,0,0,.3)'
	},
	mainFeaturesPostContent: {
		position: "relative",
		padding: theme.spacing (6),
		marginTop: theme.spacing (6)
	},
	cardMedia: {
		paddingTop: '100%'
	},
	cardContent: {
		flexGrow: 1
	},
	cardGrid: {
		marginTop: theme.spacing (4)
	}
}));
