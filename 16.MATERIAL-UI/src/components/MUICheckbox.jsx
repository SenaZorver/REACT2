import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function MUICheckBox() {
          return (
                    <FormControl component="fieldset">
                              <FormLabel>Eğitim Durumu</FormLabel>
                              <FormGroup>
                                        <FormControlLabel
                                                  control={<Checkbox />}
                                                  label="ilkokul"
                                                  labelPlacement="end"
                                        />
                                        <FormControlLabel
                                                  control={<Checkbox />}
                                                  label="lise"
                                                  labelPlacement="end"
                                        />
                                        <FormControlLabel
                                                  control={<Checkbox />}
                                                  label="üniversite"
                                                  labelPlacement="end"
                                        />

                              </FormGroup>
                    </FormControl>
          )
}

export default MUICheckBox