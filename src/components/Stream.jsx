import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from 'react-router-dom'; 

function Stream (props) {
	const { cover_image, audience_count, username, nickname, channel_id } = props.data;
	return (
		<Card sx={{width: '200px', height: '284px', border: "solid #FB2961 4px" }}>
			<CardActionArea component={Link} to={`/${channel_id}`}>
				<Box sx={{position: "relative"}}>
					<Box
						sx={{
							position: "absolute",
							top: 5,
							marginLeft: "auto",
							marginRight: "auto",
							right: 10,
							bgcolor: "rgba(0, 0, 0, 0.54)",
							color: "white",
							padding: "5px",
							textAlign: "center",
							display: 'flex',
							alignItems: 'center',
							flexWrap: 'wrap',
							borderRadius: "26px",
							justifyContent: "center",
							minWidth: "30%",
							maxWidth: "80%",
							flexBasis: "auto",
							flexGrow: 1,
						}}
					>
						<VisibilityOutlinedIcon 
							sx={{
								width: '18px',
								height: '18px',
								marginRight: '2px'
							}}
						/>
						<Typography variant="body2">{audience_count}</Typography>
					</Box>
					<CardMedia
						component="img"
						width= "200"
						height="284"
						image={cover_image}
					/>
					<Box
						sx={{
							position: "absolute",
							bottom: 5,
							marginLeft: "auto",
							marginRight: "auto",
							left: 0,
							right: 0,
							width: "90%",
							bgcolor: "#261067",
							color: "white",
							padding: "5px",
							borderRadius: "5px",
						}}
					>
						<Typography variant="h7">{nickname}</Typography>
						<Typography variant="body2">@{username}</Typography>
					</Box>
				</Box>
			</CardActionArea>
		</Card>
	)
}

export default Stream;