import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import styles from '../styles/typography.module.css';

function StreamPage(props) {
	const [streamData, setStreamData] = useState({});
	const channelId = useParams().channelId;
	let data = useLocation();
	const { cover_image, audience_count, username, nickname, channel_id, avatar } = useLocation().state;
	console.log(useLocation());
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
			<Box sx={{ width: "90vw", height: "90vh" }}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<img src={cover_image} style={{maxHeight: "500px"}}/>
				</Grid>
			</Grid>
			<Grid container spacing={4} paddingTop={3}>
				<Grid item xs={1} sm={2}
					md={2}
				>
					<Avatar src={avatar} sx={{border: "3px solid #FB2961", width: "50px", height: "50px"}}/>
					<div className={styles.live}>LIVE</div>
				</Grid>
				<Grid item xs={3}>
					<div className={styles.whtHdr}>
						{nickname}
					</div>
					<div className={styles.whtHdr}>
						@{username}
					</div>
				</Grid>
			</Grid>
		</Box>
	)
}

export default StreamPage;