import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
function StreamPage({data}) {
	return (
		<>
			<Grid container spacing={2} paddingTop={3}>
				<Grid item xs={12}>
					<Box
						display="flex"
						justifyContent="center"
						alignItems="center"
						// minHeight="100vh"
						sx={{bgcolor: "black"}}
					>
						<img src='https://mui.com/static/images/cards/contemplative-reptile.jpg' />
					</Box>
				</Grid>
				<Grid item xs={2} 
					md={1.2}
				>
					LIVE
				</Grid>
				<Grid item xs={3}>
					<div>
						John Doe
					</div>
					<div>
						@Test Doe
					</div>
				</Grid>
			</Grid>
		</>
	)
}

export default StreamPage;