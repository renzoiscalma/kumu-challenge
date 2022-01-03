import Box from "@mui/material/Box";
import StreamList from "./StreamList";
import StreamPage from "./StreamPage";

function Content() {
	return (
		<Box sx={{paddingLeft: "24px"}}>
			{/* <StreamList></StreamList> */}
			<StreamPage></StreamPage>
		</Box> 
	)
	
}

export default Content;