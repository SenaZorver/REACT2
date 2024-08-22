import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function MUIImagelist() {

          const itemData = [
                    {
                              img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
                              title: 'Breakfast',
                    },
                    {
                              img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
                              title: 'Camera',
                    },
                    {
                              img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
                              title: 'Coffee',
                    },
                    {
                              img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
                              title: 'Hats',
                    },
                    {
                              img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
                              title: 'Fern',
                    },
                    {
                              img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
                              title: 'Bike',
                    },
                    {
                              img: 'https://media.istockphoto.com/id/622898480/tr/foto%C4%9Fraf/famous-blue-city-of-chefchaouen-morocco.jpg?s=612x612&w=0&k=20&c=OIxTHJeX_GJ1vQQDIVWb-aDYraGXvwArgrqF6BGC0Cs=',
                              title: 'Şafşavan'
                    },
                    {
                              img: 'https://media.istockphoto.com/id/1040006084/tr/foto%C4%9Fraf/eski-%C5%9Fehir-essaouira-fasta-g%C3%B6r%C3%BCnt%C3%BCleyin.jpg?s=612x612&w=0&k=20&c=AaC_LpiZebcWptUOuimVMqVVUNmfAiB0d20WE7nKRK8=',
                              title: 'Suvayr'
                    },
                    {
                              img: 'https://sestri.com.tr/wp-content/uploads/2024/04/morocco.jpg',
                              title: 'Marakeş'
                    },
                    {
                              img: 'https://gezievreni.com/wp-content/uploads/2018/06/Fes-Fas.jpg',
                              title: 'Fes'
                    },
          ];

          return (
                    <ImageList>
                              {
                                        itemData.map((item) => (
                                                  <ImageListItem loading="lazy" key={item.img}>
                                                            <img src={item.img} />
                                                  </ImageListItem>

                                        ))
                              }
                    </ImageList>
          )

}

export default MUIImagelist