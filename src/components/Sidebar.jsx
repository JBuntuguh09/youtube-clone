import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../resources/Constants'


const Sidebar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack
    direction="row"
    sx={{
        overflow:'auto',
        height : { sx: 'auto', md:'95%' },
        flexDirection:{ md:'column'}
    }}>
        {categories.map((val)=>(
           <button className='category-btn'
           onClick={()=>{setSelectedCategory(val.name)}}
           style={{background: val.name===selectedCategory && '#FC1503',
           color:'white'}}
           key = {val.name}
           >
                <span style={{color : val.name===selectedCategory?'white'
                :'red', marginRight:'15px'}}>{val.icon}</span>
                <span style={{opacity: val.name===selectedCategory?'1'
                :'0.8'}}>{val.name}</span>
            </button>
        ))}
       
        
    </Stack>
  )
}

export default Sidebar