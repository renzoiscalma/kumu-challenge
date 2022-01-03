import Stream from './Stream';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import styles from '../styles/typography.module.css';

function StreamList (props) {
	return (
		<>
			<Box paddingTop={5} paddingBottom={1}>
				<div className={styles.pinkHdr}> Streams </div>
			</Box>
			<Grid container spacing={3}>
				{
					props.live.map((data) => {
						console.log(data)
						return (
							<Grid item xs={6} s={6} md={3} xl={2} key={data.nickname}
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
			<div className={styles.seeMoreAlign}>
				<Link className={styles.seeMore} underline="always" onClick={props.handleSeeMore}> Show More </Link>
			</div>
		</>
	)
}

export default StreamList;