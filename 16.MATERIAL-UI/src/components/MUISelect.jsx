import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function MUISelect() {
          const [currency, setCurrency] = useState('');

          console.log(currency)
          return (
                    <div>
                              <FormControl sx={{ width: '150px' }}>
                                        <InputLabel>Para Birimi</InputLabel>
                                        <Select value={currency} onChange={(e) => setCurrency
                                                  (e.target.value)}>
                                                  <MenuItem value="TRY">Türk Lirası</MenuItem>
                                                  <MenuItem value="USD">Doları</MenuItem>
                                                  <MenuItem value="EUR">EURO</MenuItem>
                                        </Select>
                              </FormControl>
                    </div >
          )
}

export default MUISelect