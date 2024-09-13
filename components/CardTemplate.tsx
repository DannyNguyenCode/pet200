'use client'

import { Pet } from "@interfaces/pet"
import Card from '@mui/material/Card';
import {Box} from '@mui/material/'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActions, ThemeProvider } from '@mui/material';
import dancingScript from '@styles/dancingScriptTheme'
import FullScreenDialog from "./Modal";
import Image from "next/image";
import optimizeImage from '@utils/optimizeImage'
const CardTemplate =({data, i, isMasonry}:{data:Pet, i:number, isMasonry?:boolean}) => {

  return (
            <Card raised id='cardContainer'>
                  <ThemeProvider theme={dancingScript}>
                      <Typography className={`card_header capitalize pl-4 py-1 text-center`} gutterBottom variant="h5" component="div">
                          {data.name}
                      </Typography>
                  </ThemeProvider>
          
                    <CardMedia >
                      <Box >
                        <Image 
                          height={`${400}`}
                          width={200}
                          src={`${optimizeImage(data.image)}`}
                          alt="pet image placeholder"
                          priority={true}
                          layout="responsive"
                          className='loadedImage'
                        />
                      </Box>

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

                  <FullScreenDialog data={data} image={`${data.image}`}/>

              </CardActions>
          </Card>

  )
}

export default CardTemplate;