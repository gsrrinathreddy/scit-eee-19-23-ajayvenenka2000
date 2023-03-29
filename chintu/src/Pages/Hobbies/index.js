import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 1500 , height: 1000 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://www.awesomecuisine.com/wp-content/uploads/2015/08/mangalore-bonda.jpg',
    title: 'bonda',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://1.bp.blogspot.com/-VCkjsS1Tfmo/XgzLILEh5oI/AAAAAAAAACA/Yg7TKYf6VYUlNm33vg35es80Zq3yRMJLwCLcBGAsYHQ/s1600/manchuri.jpg',
    title: 'manchuria',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    
    cols: 2,
  },
  {
    img: 'https://tse1.mm.bing.net/th?id=OIP.f3KDuSwGFLRJ6PXXIsFBEAHaFs&pid=Api&P=0',
    title: 'social media',
    
    cols: 2,
  },
  {
    img: 'https://tse2.mm.bing.net/th?id=OIP.FPuP3QNkURKQqGMi9VkeZQHaE8&pid=Api&P=0',
    title: 'biryani',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://tse3.mm.bing.net/th?id=OIP.9rlL0sBerBT1in6HDUbJ5wHaFk&pid=Api&P=0',
    title: 'cricket',
    
  },
  {
    img: 'http://4.bp.blogspot.com/-FkMpKIx-Pu4/UOp4mWBjpiI/AAAAAAAABLM/Z93yE-skTOE/s1600/sport+bike+hd+desktop+wallpaper.jpg',
    title: 'bike',
    
  },
  {
    img: 'https://tse4.mm.bing.net/th?id=OIP.b7FHUk7oELRWxSeIijekkQHaE8&pid=Api&P=0',
    title: 'writing',
    
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://i.ytimg.com/vi/xEmgaOvvv0M/maxresdefault.jpg',
    title: 'photography',
    
  },
  {
    img: 'https://tse2.mm.bing.net/th?id=OIP.7-r4oaIGtPNh6Qxp3r6eSgHaEV&pid=Api&P=0',
    title: 'swimming',
    
  },
  {
    img: 'https://www.photoworkout.com/wp-content/uploads/2017/07/Comparing-the-Best-Monitors-for-Video-Editing-in-2019.jpg',
    title: 'video editing',
  
    cols: 2,
  },
];