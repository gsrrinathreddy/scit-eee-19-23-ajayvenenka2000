import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useState,useEffect} from 'react';
import axios from 'axios';
export default function Projects(){
const [loader,setLoader] = useState(true);
  const[projects,setProjects] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/projects')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setProjects(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Technical-Project</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          I have successfully completed my Technical project on "LIGHT DIMMER CIRCUIT USING DIAC AND TRIAC"
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Mini-Project</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          I have successfully completed my Mini project on "SPEED CONTROL OF INDUCTION MOTOR DRIVE USING  SPACE VECTOR PULSE WIDTH MODULAATION "
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Major-Project</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          I have successfully completed my Mini project on "POWER QUALITY IMPROVEMENT USING DVR"
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    
    </div>
  );
}