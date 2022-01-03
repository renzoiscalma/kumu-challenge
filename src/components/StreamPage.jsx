import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function StreamPage(props) {
	// const { cover_image, audience_count, username, nickname, channel_id } = props.data;
	const [streamData, setStreamData] = useState({});
	const channelId = useParams().channelId;
	console.log(useParams());
	useEffect(async () => {
		const fetchData = async() => {
			const result = await axios
				.post(`https://liveapi.kumu.live/live/regular-data`, {
					id: channelId
				}, {
					headers: {
						'device-id': '61d323ead0b65',
					}
				});
		}

		fetchData();
	}, []);
	return (
		<>
			<Grid container spacing={2} paddingTop={3}>
				<Grid item xs={12}>
					<Box
						display="flex"
						justifyContent="center"
						alignItems="center"
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