import React, {useState, useEffect} from "react";
import { Box, Stack, Typography } from "@mui/material";
import {SideBar, Videos} from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useContext } from "react";
import SwitchModeContext from "../contexts/SwitchModeContext";
const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);
    const { mode } = useContext(SwitchModeContext);
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
        .then((data) => setVideos(data.items));

    },[selectedCategory]);
    return (
        <Stack sx={{ flexDirection: {sx: 'column', md: 'row'} }}>
            <Box 
            sx={{height: {sx: 'auto', md: '92vh'}, 
            borderRight: '1px solid #3d3d3d',
            px: {sx:0, md: 2}
            }}>
                <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                
                <Typography className="typography" variant="body-2" sx={{mt: 1.5, color: mode === 'dark' ? '#fff' : '#000'}}>
                    Video Streaming App

                </Typography>
            </Box>
            <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
                <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: mode === 'dark' ? 'white' : 'black'}}>
                    {selectedCategory} <span style={{ color: mode === 'dark' ?  '#FC1503' : '#000' }}>Videos</span>
                </Typography>
                <Videos videos={videos}/>
                { selectedCategory === 'New' ?

                <Box mt={5}>
                    <small>
                        <a 
                            href="https://www.flaticon.com/free-icons/play-button" 
                            style={{ marginLeft: 'calc(40% - 20px)' }}
                            title="play button icons">Play button icons created by Freepik - Flaticon
                        </a>
                    </small>

                </Box>
                : null
                }
            </Box>
        </Stack>
    )
}
export default Feed;