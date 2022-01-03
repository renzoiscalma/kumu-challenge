import Drawer from '@mui/material/Drawer';
import styles from '../styles/MobileDrawer.module.css';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/logo.png';

function MobileDrawer (props) {
	
	return (
		<Drawer
			className={styles.background}
			anchor='left'
			open={props.open}
			sx={{'& .MuiDrawer-paper': {width: "100%"}}}
			PaperProps={{
				sx: {
					backgroundColor: "#0F0B46",
					color: "#FB2961",
					fontFamily: "CircularXXTT-Black",
					textAlign: "left"
				}
			}}
		>
			<div className={styles.spacing}>
				Streams
			</div>
			<IconButton className={styles.closeBtn} onClick={props.handleMobileOpen} aria-label="close">
				<CloseIcon />
			</IconButton>
			<div className={styles.centerImg} >
				<img src={logo} width="100px" />
			</div>
		</Drawer>
	)
}

export default MobileDrawer;