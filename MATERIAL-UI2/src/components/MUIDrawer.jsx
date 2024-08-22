import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

function MUIDrawer() {

  const [isOpen, setIsopen] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsopen(true)}>Aç</Button>

      <Drawer open={isOpen} onClose={() => setIsopen(false)}>
        <Box sx={{ width: '300px', textAlign: 'center' }}>
          <h1>BAŞLIK</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit eius dolorum odio sapiente quam porro expedita recusandae doloremque, eveniet mollitia laudantium? Facilis, recusandae incidunt deleniti placeat iure non eaque maiores!</p>

        </Box>
      </Drawer>
    </div>
  )
}

export default MUIDrawer