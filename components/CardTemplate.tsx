'use client'

import { Pet } from "@interfaces/pet"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActions, ThemeProvider } from '@mui/material';
import dancingScript from '@styles/dancingScriptTheme'
import FullScreenDialog from "./Modal";
import Image from "next/image";

const CardTemplate =({data, i, isMasonry}:{data:Pet, i:number, isMasonry?:boolean}) => {

  const everOther =(counter:number)=>{
    if(counter % 2 === 0){
      return 'nala.jpg'
    }else if(counter % 3 === 0){
      return 'mina.jpg'
    }
    else{
      return 'flair.jpg'
    }

  }
  return (
            <Card raised className={`${isMasonry ? "flex flex-col m-4 card_text_container":"flex flex-col my-4 full_width" }`}>
                  <ThemeProvider theme={dancingScript}>
                      <Typography className={`card_header capitalize pl-4 py-1 text-center`} gutterBottom variant="h5" component="div">
                          {data.name}
                      </Typography>
                  </ThemeProvider>
                  <CardMedia>
                    <Image 
                      height={250}
                      width={250}
                      src={`/images/${everOther(i)}`}
                      alt="pet image placeholder"
                      priority={true}
                      className="w-full"
                    />

                  </CardMedia>  
                  <CardContent>
                  <Typography variant="body2" className="capitalize pb-2" color="text.secondary">
                      {data.category}
                    </Typography>
                    <Typography variant="body2" className="capitalize pb-2" color="text.secondary">
                      {data.breed} - {data.gender} - {data.primaryColor}
                    </Typography>
                    <Typography variant="body2" className="" color="text.secondary">
                      Age: {data.age} years old
                    </Typography>
                  </CardContent>

                <CardActions>

                  <FullScreenDialog data={data} image={`/images/${everOther(i)}`}/>

              </CardActions>
          </Card>

  )
}

export default CardTemplate;