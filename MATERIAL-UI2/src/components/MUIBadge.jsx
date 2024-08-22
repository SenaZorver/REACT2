import React from 'react'
import Badge from '@mui/material/Badge';
import DraftsIcon from '@mui/icons-material/Drafts';

function MUIBadge() {
          return (
                    <div style={{ marginTop: '100px', marginLeft: '100px' }}>
                              <Badge badgeContent={15} color='primary' max={9}>
                                        <DraftsIcon />
                              </Badge>
                    </div>
          )
}

export default MUIBadge