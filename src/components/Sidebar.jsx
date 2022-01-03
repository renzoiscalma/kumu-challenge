import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import { DrawerHeader } from '.';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import { List } from '@mui/material';

function Sidebar (props) {
	const drawerWidth = 240;

	const openedMixin = (theme) => ({
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		overflowX: 'hidden',
	});

	const closedMixin = (theme) => ({
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: `calc(${theme.spacing(7)} + 1px)`,
		[theme.breakpoints.up('sm')]: {
			width: `calc(${theme.spacing(9)} + 1px)`,
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
				'& .MuiDrawer-paper': { marginTop: '65px' }
			}}
		>
			<DrawerHeader>
				<IconButton onClick={props.handleOpen}>
					<ChevronLeftIcon />
				</IconButton>
			</DrawerHeader>
			<Typography paddingLeft="16px" variant="h6" noWrap component="div">
				Users
			</Typography>
			<List>
				{['Person 1', 'Person 2', 'Person 3', 'Person 4'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							<AccountCircleOutlinedIcon 
								sx={{
									width: '36px',
									height: '36px'
								}}
							/>
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</Drawer>
	)
}

export default Sidebar;