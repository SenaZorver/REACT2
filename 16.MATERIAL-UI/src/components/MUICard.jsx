import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Toyota from '../image/Toyota.jpg';
function MUICard() {
          return (
                    <Card sx={{ maxWidth: 345 }}>
                              <CardMedia
                                        component="img"
                                        alt="Toyota 2 renkli"
                                        height="150"
                                        image={Toyota}
                              />

                              <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                                  Toyota 2 renkli
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est deleniti odit tempore a provident officia totam delectus esse fugit ratione porro ex, beatae harum hic fugiat quia nobis veniam aperiam.
                                        </Typography>
                              </CardContent>

                              <CardActions>
                                        <Button size="small">Satın al</Button>
                                        <Button size="small">İletişime geç</Button>
                              </CardActions>

                    </Card>
          )
}

export default MUICard