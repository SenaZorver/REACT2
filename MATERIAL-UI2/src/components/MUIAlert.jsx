import React from 'react'
import Alert from '@mui/material/Alert';

function MUIAlert() {
          return (
                    <div>
                              <Alert severity='info'>Bilgilendirme mesajı</Alert>
                              <Alert severity='error'>Hata mesajı</Alert>
                              <Alert severity='warning' variant='outlined'>Uyarı mesajı</Alert>
                    </div>
          )
}

export default MUIAlert