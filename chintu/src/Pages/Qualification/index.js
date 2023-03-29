import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sree chaitanya institute of technological science" src="https://tse2.mm.bing.net/th?id=OIP.1UVS-mvQHxo_VNC5a1Eb9QAAAA&pid=Api&P=0"/>
        </ListItemAvatar>
        <ListItemText
          primary="Sree chaitanya institute of technological science"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                75% CGPA
              </Typography>
              {" — Bachelor of technology [EEE]"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="vivekanada institute of technology science" src="https://2.bp.blogspot.com/-9WcHyDUfB-o/V1ZWrxjjgmI/AAAAAAAAW6A/X6Rx12NbuhcpIBTLGNkeDLWp_aTuVR9KACLcB/s1600/v3402.PNG"/>
        </ListItemAvatar>
        <ListItemText
          primary="vivekanada institute of technology science"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                83% CGPA
              </Typography>
              {" — Diploma in [EEE]"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sri srinivasa ramanajun high school" src="http://i0.wp.com/ultraculture.org/wp-content/uploads/2016/03/srinivas-ramanujan.jpg?resize=740%2C813" />
        </ListItemAvatar>
        <ListItemText
          primary="Sri srinivasa ramanajun high school"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                90% CGPA
              </Typography>
              {' — Higher Secondory Education '}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}