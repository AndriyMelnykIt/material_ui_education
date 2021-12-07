import React from 'react';
import { Paper, Grid, Container, Typography, Button, CardMedia,
	CardContent, Card, CardActions
} from '@material-ui/core';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

import { useStyles } from '../Styles/Styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Main = () => {
	const classes = useStyles ();

	return (
		<div>
			<Paper className={classes.mainFeaturesPost}
			       style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
				<Container fixed>
					<div className={classes.overlay}/>
					<Grid container>
						<Grid item md={6}>
							<div className={classes.mainFeaturesPostContent}>
								<Typography
									component="h1"
									variant="h3"
									color="inherit"
									gutterBottom
								>
									Phillip Miller
								</Typography>
								<Typography
									component="h5"
									color="inherit"
									paragraph
								>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci
									alias consequuntur delectus ducimus enim incidunt ipsum molestiae
									necessitatibus qui, reiciendis sequi? Cum cupiditate harum odio pariatur
									quae quibusdam tenetur?
								</Typography>
								<Button variant="contained" color='secondary'>
									Learn more
								</Button>
							</div>
						</Grid>
					</Grid>
				</Container>
			</Paper>
			<div className={classes.mainContent}>
				<Container maxWidth="md">
					<Typography variant="h2" align="center" color="textPrimary" gutterBottom>Phillip Miller</Typography>
					<Typography variant="h5" align="center" color="textPrimary" paragraph >
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Aspernatur consectetur, cumque deserunt dicta distinctio ducimus itaque labore numquam omnis,
						possimus recusandae repudiandae tenetur, ullam. Delectus doloribus eligendi inventore
						perferendis similique.
					</Typography>
					<div className={classes.mainButtons}>
						<Grid container spacing={5} justify="center">
							<Grid item>
								<Button variant="contained" color="primary">Start Now</Button>
							</Grid>
							<Grid item>
								<Button variant="outlined" color="primary">Learn now</Button>
							</Grid>

						</Grid>
					</div>
				</Container>
			</div>
			<Container className={classes.cardGrid} maxWidth="md">
				<Grid container spacing={4}>
					{cards.map ((card) => (
						<Grid item key={card} xs={12} sm={6} md={4}>
							<Card className={classes.card}>
								<CardMedia
									className={classes.cardMedia}
									image="https://source.unsplash.com/random"
									title="Image title"
								/>
								<CardContent className={classes.cardContent}>
									<Typography variant="h5" gutterBottom>
										Blog Post
									</Typography>
									<Typography>
										Phillip Miller - leather goods
									</Typography>
								</CardContent>
								<CardActions>
									<Button size="small" color="primary">View</Button>
									<Button size="small" color="primary">Edit</Button>
									<LayerIcon/>
									<PlayCircleFilledIcon/>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
};

export default Main;
