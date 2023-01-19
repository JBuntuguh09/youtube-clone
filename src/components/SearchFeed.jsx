import { Box, Stack, Typography } from '@mui/material'
import React, {useEffect, useState} from 'react'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { FetchApi } from '../resources/Fetchpi'
import { useParams } from 'react-router-dom'


const SearchFeed = () => {
  const [searchVal, setSearchVal] = useState('New')
  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams()

  useEffect(() => {
    FetchApi(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>{
        setVideos(data.items)
    })
  }, [searchTerm])
  
  return (
    <Box p={2} sx={{overflow:'auto', height:'90vh', flex: 2}}>
      <Typography variant='h4' fontWeight='bold' mb={2}
      sx={{color:'white'}}>
        Search Result For <span style={{color:'#F31503'}}>{searchTerm}</span> Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed