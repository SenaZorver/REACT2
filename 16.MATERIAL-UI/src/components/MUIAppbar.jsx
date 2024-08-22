import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem, Stack } from '@mui/material';


function MUIAppbar() {
          const [anchorEl, setanchorEl] = useState(null);

          const openMenu = (e) => {
                    setanchorEl(e.currentTarget);

          }

          const closeMenu = () => {
                    setanchorEl(null);
          }
          const openControl = anchorEl ? true : false;

          return (
                    <AppBar position='static'>
                              <Toolbar>
                                        <IconButton>
                                                  <MenuIcon sx={{ color: '#fff' }} />
                                        </IconButton>
                                        <Typography variant='h6'>MUI</Typography>
                                        <Stack direction="row" sx={{ marginLeft: 'auto' }}>
                                                  <Button sx={{ color: '#fff' }}>Anasayfa</Button>
                                                  <Button sx={{ color: '#fff' }}>Hakkımızda</Button>
                                                  <Button sx={{ color: '#fff' }} onClick={openMenu}>Ürünler</Button>
                                                  <Button sx={{ color: '#fff' }}>İletişim</Button>
                                        </Stack>
                                        <Menu anchorEl={anchorEl} open={openControl} onClose={closeMenu}>
                                                  <MenuItem>Lastik</MenuItem>
                                                  <MenuItem>Bijon</MenuItem>
                                                  <MenuItem>Body Kit</MenuItem>
                                        </Menu>
                              </Toolbar>
                    </AppBar>
          )
}

export default MUIAppbar