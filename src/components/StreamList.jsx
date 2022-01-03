import Stream from './Stream';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
function StreamList () {
	const data = {
		views: 543,
		tag: "@testtag",
		title: "John Doe"
	}
	return (
		<>
			<Box paddingTop={3} paddingBottom={3}>
				Streams
			</Box>
			<Grid container spacing={3}>
				{
					[...Array(21).keys()].map((i) => {
						return (
							<Grid item xs={6} s={6} md={3} xl={2} 
								sx={{
									'& .MuiGrid-item': {
										paddingLeft: "10px"
									}
								}}
							>
								<Stream data={data}></Stream>
							</Grid>
						)
					})
				}
				
			</Grid>
			<div>
				Show More
			</div>
		</>
	)
}

export default StreamList;