import { IconButton, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import App from '../App';

function Header() { // pass open as props
	const drawerWidth = 240;

	const AppBar = styled(MuiAppBar, {
		shouldForwardProp: (prop) => prop !== 'open',
	})(({ theme, open }) => ({
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		...(open && {
			marginLeft: drawerWidth,
			width: `calc(100% - ${drawerWidth}px)`,
			transition: theme.transitions.create(['width', 'margin'], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		}),
	}));

	return (
		<AppBar>
			<Toolbar sx={{justifyContent: "space-between"}}>
				<Typography variant="h6" noWrap component="div">
					Streams
				</Typography>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					// onClick={handleDrawerOpen} todo pass handleDrawerOpen as prop
					edge="end"
					sx={{
						marginRight: '36px',
						display: 'none'
						// ...(open && { display: 'none' }),
					}}
				>
					<MenuIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}

export default Header;