import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
function MUITextField() {
          return (
                    <div>
                              <div style={{ marginBottom: '30px' }}>
                                        <TextField label="İsim" variant='outlined' />
                                        <TextField label="İsim" variant='filled' />
                                        <TextField label="İsim" variant='standard' />

                              </div>
                              <div style={{ marginBottom: '30px' }}>
                                        <TextField label="İsim" variant='outlined' color='warning' />
                              </div>
                              <div style={{ marginBottom: '30px' }}>
                                        <TextField label="İsim" variant='outlined' color='warning' helperText='İsminizi giriniz' />
                                        <TextField label="Şifre" variant='outlined' color='warning' helperText='Şifrenizi kimseye göstermeyin' /
                                        >
                              </div>
                              <div style={{ marginBottom: '30px' }}>
                                        <TextField label="Kimlik No" disabled variant='outlined' color='warning' />
                              </div>
                              <div style={{ marginBottom: '30px' }}>
                                        <TextField InputProps={{ readOnly: true }} value="sena" disabled variant='outlined' color='warning' />
                              </div>

                              <div style={{ marginBottom: '30px' }}>
                                        <TextField InputProps={{
                                                  startAdornment: <InputAdornment position='start'><PersonIcon /></InputAdornment>
                                        }} variant='outlined' />
                              </div>

                              <div style={{ marginBottom: '30px' }}>
                                        <TextField InputProps={{
                                                  endAdornment: <InputAdornment position='end'><PersonIcon /></InputAdornment>
                                        }} variant='outlined' />
                              </div>

                              <div style={{ marginBottom: '30px' }}>
                                        <TextField label="Soyisim giriniz" InputProps={{
                                                  endAdornment: <InputAdornment position='end'><PersonIcon /></InputAdornment>
                                        }} variant='outlined' />
                              </div>
                    </div>

          )
}

export default MUITextField