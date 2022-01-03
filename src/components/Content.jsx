import Box from "@mui/material/Box";
import StreamList from "./StreamList";
import StreamPage from "./StreamPage";
import { Routes, Route, Link } from "react-router-dom";

function Content(props) {
	return (
		<Box sx={{paddingLeft: "24px", backgroundColor: "#0F0B46", width: "100%"}}>
			
			{/* <StreamPage></StreamPage> */}
			<Routes>
				<Route path="/" element={<StreamList {...props}></StreamList>} />
				<Route path=":channelId" element={<StreamPage {...props}></StreamPage>} />
			</Routes>
		</Box> 
	)
	
}

export default Content;