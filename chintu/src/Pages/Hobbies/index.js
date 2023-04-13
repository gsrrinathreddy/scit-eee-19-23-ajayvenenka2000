import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import {useState,useEffect} from 'react';
import axios from 'axios';


export default function Hobbies() {
    const [loader,setLoader] = useState(true);
        const [hobbies,setHobbies] = useState(null);
    
        const connectToServer = async  () => axios.get('http://localhost:8000/hobbies')
                                                .then(res=>{
                                            
                                                    console.log(res.data);
                                                    setHobbies(res.data);
                                                    setLoader(false)
                                                }).catch(err=>console.log(err))
    useEffect(()=>{
       connectToServer();
    },[])
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
    img: 'https://tse1.explicit.bing.net/th?id=OIP.aeLuAdrDhp3cyUEuicwA7QHaFc&pid=Api&P=0',
    title: 'bonda',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://tse3.mm.bing.net/th?id=OIP.1BKOE7C2ywIBI4g4Rg0MkQHaEK&pid=Api&P=0',
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
    img: 'https://tse4.mm.bing.net/th?id=OIP.zAOqRhVWng9oVYPC5T90gwHaE8&pid=Api&P=0',
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