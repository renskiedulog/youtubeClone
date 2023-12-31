import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { Videos, ChannelCard } from './'
import { fetchFromAPI } from './'

const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchFromAPI(`channels?part="snippet&id=${id}`).then(response => setChannelDetail(response.items[0]));
      });
    return (
        <></>

    )
}

export default ChannelDetail