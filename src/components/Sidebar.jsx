import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import { DrawerHeader } from '.';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { List } from '@mui/material';
import styles from '../styles/typography.module.css';


function Sidebar (props) {
	const drawerWidth = 240;
	console.log(props.live);
	
	const openedMixin = (theme) => ({
		backgroundColor: "#0F0B46",
		color: "white",
		borderRightColor: "white !important",
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		overflowX: 'hidden',
		[theme.breakpoints.down('sm')]: {
      width: 0,
    },
	});

	const closedMixin = (theme) => ({
		backgroundColor: "#0F0B46",
		color: "white",
		borderRightColor: "white !important",
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: `calc(${theme.spacing(7)} + 1px)`,
		[theme.breakpoints.up('sm')]: {
			width: `calc(${theme.spacing(9)} + 1px)`,
		},
		[theme.breakpoints.down('sm')]: {
      width: 0,
    },
	});

	const Drawer = styled(MuiDrawer, { shouldForwardprops: (props) => props !== 'open' })(
		({ theme, open }) => ({
			width: drawerWidth,
			flexShrink: 0,
			whiteSpace: 'nowrap',
			boxSizing: 'border-box',
			...(open && {
				...openedMixin(theme),
				'& .MuiDrawer-paper': openedMixin(theme),
			}),
			...(!open && {
				...closedMixin(theme),
				'& .MuiDrawer-paper': closedMixin(theme),
			}),
		}),
	);

	return (
		<Drawer variant="permanent" open={props.open}
			sx={{
				'& .MuiDrawer-paper': { marginTop: '66px' }
			}}
		>
			<DrawerHeader>
				<IconButton onClick={props.handleOpen}>
					<LogoutOutlinedIcon className={(props.open) ? styles.flipToggle : styles.toggle} />
				</IconButton>
			</DrawerHeader>
			<div className={styles.users}>
				Users
			</div>
			<List>
				{props.live.slice(0, 6).map((data, index) => (
					<ListItem button key={data.username} sx={{paddingBottom: "15px !important"}}>
						<ListItemIcon>
							<Avatar src={data.avatar} sx={{border: "3px solid #4AEFE9"}}/>
						</ListItemIcon>
						{/* <ListItemText primary={data.username} /> */}
						<div className={styles.username}> {data.username} </div>
					</ListItem>
				))}
			</List>
		</Drawer>
	)
}

export default Sidebar;