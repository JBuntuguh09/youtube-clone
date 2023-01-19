import { Box, Stack } from '@mui/material'
import React from 'react'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'

const Videos = ({videos, direction}) => {
  
    if(!videos?.length) return 'Loading.....'
    return (
    <Stack direction = {direction || 'row'} flexWrap='wrap'
    justifyContent='center' gap={2}
    >
        {videos.map((val, key)=>(
            <Box key={key}>
                {val.id.videoId && <VideoCard
                video={val}/>}
                {val.id.channelId && <ChannelCard
                channelDetail={val}/>
                }
            </Box>
        ))}

    </Stack>
  )
}

export default Videos