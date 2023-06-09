import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useContext } from "react";
import SwitchModeContext from "../contexts/SwitchModeContext";
const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState(null);
    const [videos, setVideos] = useState();
    const { mode } = useContext(SwitchModeContext);
    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
        .then((data) => setVideoDetail(data.items[0]));

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        .then((data) => setVideos(data.items))

    }, [id]);
    if(!videoDetail?.snippet) return 'Loading';
    const { snippet: { title, channelId, channelTitle }, statistics: {viewCount, likeCount} } = videoDetail;
    
    return (
        <Box minHeight='95vh'>
            <Stack direction={{xs: 'column', md: 'row'}}>
                <Box flex={1}>
                    <Box sx={{width: '100%', position: 'sticky', top: '86px'}}>
                        <ReactPlayer className='react-player' url={`https://www.youtube.com/watch?v=${id}`} controls/>
                        <Typography color={mode === 'dark' ? '#fff' : '#000'} variant="h5" fontWeight="bold" p={2}>
                            {title}
                        </Typography>
                        <Stack direction='row' justifyContent='space-between' sx={{ color: '#fff' }} py={1} px={2} >
                            <Link to={`/channel/${channelId}`}>
                                <Typography  color={mode === 'dark' ? '#fff' : '#000'}>
                                    {channelTitle}
                                    <CheckCircle sx={{fontSize: '12px', color: 'rgb(96,96,96)', ml: '4px'}} />
                                </Typography>
                            </Link>
                            <Stack direction='row' gap='20px'>
                                <Typography variant="body1" sx={{opacity: 0.7, color: mode === 'dark' ? '#fff' : '#000'}}>
                                    {parseInt(viewCount).toLocaleString()} Views
                                </Typography>
                                <Typography variant="body1" sx={{opacity: 0.7, color: mode === 'dark' ? '#fff' : '#000'}}>
                                    {parseInt(likeCount).toLocaleString()} Likes
                                </Typography>
                            </Stack>

                        </Stack>
                    </Box>
                </Box>
            <Box px={2} py={{md: 1, xs: 5}} justifyContent="center" alignItems="center" mx='auto'>
                <Videos videos={videos} direction='column'/>

            </Box>
            </Stack>

        </Box>

    )
}
export default VideoDetail;