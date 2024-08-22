import { Button } from '@mui/material'
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';


function MUIButton() {
          return (
                    <div>
                              <div style={{ marginBottom: '50px' }}>
                                        <Button variant='text'>Kaydol</Button>
                                        <Button variant='contained'>Kaydol</Button>
                                        <Button variant='outlined'>Kaydol</Button>
                              </div>

                              <div style={{ marginBottom: '50px' }}>
                                        <Button color='primary'>Giriş Yap</Button>
                                        <Button color='error'>Giriş Yap</Button>
                                        <Button color='info'>Giriş Yap</Button>
                                        <Button color='secondary'>Giriş Yap</Button>
                                        <Button color='success' variant='contained'>Giriş Yap</Button>
                              </div>

                              <div style={{ marginBottom: '50px' }}>
                                        <Button size='small' variant='contained' color='warning'>Geri Dönme</Button>
                                        <Button size='medium' variant='contained' color='warning'>Geri Dönme</Button>
                                        <Button size='large' variant='contained' color='warning'>Geri Dönme</Button>

                              </div>

                              <div style={{ marginBottom: '50px' }}>
                                        <Button size='small' onClick={() => alert("Button çalıştı")} variant='contained' color='warning' startIcon={<AddCircleIcon />}>Geri Dönme</Button>
                              </div>

                    </div>
          )
}

export default MUIButton