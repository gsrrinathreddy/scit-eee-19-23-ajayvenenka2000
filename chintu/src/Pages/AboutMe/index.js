import { Typography } from '@mui/material';
import {useState,useEffect} from 'react';
import axios from 'axios';


export default function AboutMe(){
const [loader,setLoader] = useState(true);
    const [aboutme,setAboutMe] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Aboutme')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setAboutMe(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])
    return(
        <>
    <Typography>Your Name   :- Venenka.Ajay </Typography>
    <Typography>Father Name :- Venenka.Sambaraju</Typography>
    <Typography>Mother Name :- Venenka.Swetha</Typography>
    <Typography>Phone No    :- 9381479709 </Typography>
    <Typography>Address     :- 3-86/8 ,thimmapur(vill&mdl), karimnagar (dist)</Typography>
    <Typography>Gender      :- Male</Typography>
    <Typography>Aadhar No   :- 652747563500</Typography>
    <Typography>E-mail      :-ajayvenenka@gmail.com</Typography>
    <Typography>DOB         :-07-09-2000</Typography>
        </>
    )
}   