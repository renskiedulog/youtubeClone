import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from './'

const Videos = ({ Videos }) => {
    return (
        <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
            {Videos[0].map((item, idx) => (
                < Box key={idx} >
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack >
    )
}

export default Videos