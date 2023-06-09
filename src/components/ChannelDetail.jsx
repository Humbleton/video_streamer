import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import {Videos, ChannelCard} from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);
    // console.log(channelDetail,videos)
    const { id } = useParams();
    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`)
        .then(data => setChannelDetail(data?.items[0]));
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
        .then(data => setVideos(data?.items));

    },[id])

    return (
        <Box minHeight='95vh'>
            <Box>
                <div style={{
                    background: 'linear-gradient(0deg, rgba(108,109,110,0.969625350140056) 0%, rgba(100,165,208,1) 87%)'
                    ,zIndex:99999
                    ,height:'300px'}}/>
                    <ChannelCard channelDetail={channelDetail} marginTop='-112px'/>
            </Box>
            <Box display='flex' p='2'>
                <Box sx={{mr: {sm: '190px'}}} />
                    <Videos videos={videos}/>
            </Box>
            
        </Box>
    )
}
export default ChannelDetail;