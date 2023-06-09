import { Link } from "react-router-dom";
import { Typography,Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";


const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    // console.log(videoId);
    // console.log(snippet)
    // console.log(snippet.thumbnails.high.url)
    return (
        <Card sx={{borderRadius: '12px', width: { xs: '100%', sm: '358px',md: '350px' }, boxShadow: 'none'}}>
            <Link to={videoId && `/video/${videoId}` }>
                <CardMedia 
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: {xs: '100%', sm: '358px', md: '350px'}, height: 180, backgroundColor: 'white' }}/>
                
            </Link>
            <CardContent sx={{height: '106px', backgroundColor: '#1e1e1e'}}> 
                <Link to={videoId && `/video/${videoId}`}>
                    <Typography variant="subtitle1" fontWeight="bold" color='#fff'>
                        {snippet?.title.slice(0, 60) }
                    </Typography>
                </Link>
                <Link to={snippet?.channelId && `/channel/${snippet?.channelId}` }>
                    <Typography variant="subtitle2" fontWeight="bold" color='rgb(96, 96, 96)'>
                        {snippet?.channelTitle }
                        <CheckCircle sx={{ fontSize: '12px', ml: '4px'}}/>
                    </Typography>
                </Link>
            
                </CardContent>
        </Card>
    )
}
export default VideoCard;