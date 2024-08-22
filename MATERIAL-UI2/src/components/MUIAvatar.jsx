import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


function MUIAvatar() {
          return (
                    <Stack>
                              <Avatar src='https://avatar.iran.liara.run/public/17' />
                              <Avatar>S</Avatar>
                              <Avatar sx={{ bgcolor: 'red' }}>Z</Avatar>
                    </Stack>
          )
}

export default MUIAvatar