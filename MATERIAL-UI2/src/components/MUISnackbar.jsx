import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


function MUISnackbar() {
          const [openSnackbar, setOpenSnacbar] = useState(false);
          const handleClick = () => {
                    setOpenSnacbar(false)
          }
          const action = (
                    <>
                              <Button size='small' color='info' onClick={handleClose}>Kapat</Button>
                              <IconButton sx={{ color: '#fff' }} onClick={handleClose}>
                                        <CloseIcon />
                              </IconButton>
                    </>
          )
          return (
                    <div>
                              <Button onClick={handleClick}>Snackbar'ı Aç</Button>
                              <Snackbar open={openSnackbar}
                                        message="Hata oluştu"
                                        action={action}
                                        autoHideDuration={3000}
                                        onClose={handleClose}
                              />
                    </div>
          )
}

export default MUISnackbar