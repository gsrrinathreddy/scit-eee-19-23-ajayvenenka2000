import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card7() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src ="https://www.eligocs.com/wp-content/uploads/2020/09/MREN-stack-1.jpg"
          alt="MERN-stack"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          M E R N
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}