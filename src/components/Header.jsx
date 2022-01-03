import { IconButton, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import App from '../App';
import logo from '../assets/logo.png';
import styles from '../styles/typography.module.css';

function Header() { // pass open as props
	const drawerWidth = 240;

	const AppBar = styled(MuiAppBar, {
		shouldForwardProp: (prop) => prop !== 'open',
	})(({ theme, open }) => ({
		zIndex: theme.zIndex.drawer + 1,
		backgroundColor: "#0F0B46",
		borderBottomColor: "white !important",
		border: "solid #0F0B46 0.1px",
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
			<Toolbar>
				<img src={logo} width="100px"></img>
				<div className={styles.header}>
					Streams
				</div>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="end"
					sx={{
						marginRight: '36px',
						right: 0,
    				position: 'absolute'
					}}
				>
					<MenuIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}

export default Header;