import React, {useState, useEffect} from "react";
import { Box, Typography } from "@mui/material";
import { Videos} from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import SwitchModeContext from "../contexts/SwitchModeContext";
const SearchFeed = () => {
    const [videos, setVideos] = useState([]);
    const { mode } = useContext(SwitchModeContext);

    const { searchTerm } = useParams();
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
        .then((data) => setVideos(data.items));

    },[searchTerm]);
    return (
        <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
            <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: mode === 'dark' ? 'white' : 'black'}}>
                    Search Results for: <span style={{ color: '#FC1503' }}>{searchTerm}</span> videos
            </Typography>
            <Videos videos={videos}/>
        </Box>
    )
}
export default SearchFeed;