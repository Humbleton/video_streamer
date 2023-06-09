import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import SwitchModeContext from "../contexts/SwitchModeContext";
const ChannelCard = ({ channelDetail,marginTop }) => {
    // console.log(channelDetail?.id?.channelId)
    const { mode } = useContext(SwitchModeContext);
    return (
        <Box 
        sx={{
             boxShadow: 'none'
            ,borderRadius: '20px'
            ,display: 'flex'
            ,justifyContent: 'center'
            ,alignItems: 'center'
            ,width: {xs: '356px', md: '320px'}
            ,height: '320px'
            ,margin: 'auto'
            ,marginTop: marginTop
        }}
        >
            <Link to={ channelDetail?.id?.channelId && `/channel/${channelDetail?.id?.channelId}`}>
                <CardContent sx={{
                    display: 'flex'
                    ,flexDirection: 'column'
                    ,color: mode === 'dark' ? '#fff' : '#000'
                    ,justifyContent: 'center'
                    ,textAlign: 'center'}}>
                    <CardMedia
                    component="img" 
                    image={channelDetail?.snippet?.thumbnails?.high?.url }
                    alt={channelDetail?.snippet?.title}
                    sx={{borderRadius: '50%'
                    ,height: '180px'
                    ,width: '180px'
                    ,mb: 2
                    ,border: '1px solid #e3e3e3'}}
                    />
                    <Typography variant="h6">
                        {channelDetail?.snippet?.title}
                        <CheckCircle sx={{
                            fontSize: 14
                            ,color: 'rgb(96,96,96)'
                            ,ml: '4px'
                            }}/>
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography>
                            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>



        </Box>

    )
}
export default ChannelCard;