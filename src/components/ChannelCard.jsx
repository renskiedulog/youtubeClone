import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom';

import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({channelDetail}) => (
    <Box sx={{boxShadow: 'none', borderRadius: '20px', width: { md: '320px', xs: channelDetail?.snippet?.thumbnails?.high?.width }}}>
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff'}}>
                <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title} sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3', margin: 'auto'}}/>
                <Typography variant='h6' sx={{ mt: 1}}>
                    {channelDetail?.snippet?.title}
                    <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                </Typography>
                {channelDetail?.statistics?.subscriberCount &&
                <Typography>
                    {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                </Typography>}
            </CardContent>
        </Link>
    </Box>
)

export default ChannelCard