'use client'
import { useState } from 'react';
import { Pet } from '@interfaces/pet'
import Grid from '@mui/material/Grid2';
// import UpLoadCropField from './UpLoadCropField'
import CropperWrapper from './CropperWrapper';

import { FormControl,Box, Typography, Divider} from '@mui/material'

import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const PetForm = ({
  handleSubmit,
  setPet,
  pet,
  setImageFile,
  toastContainer,

}:{
  handleSubmit:(e:any)=>void,
  setPet:(pet:Pet)=>void,
  pet:Pet,
  setImageFile:(imageFile:File)=>void,
  toastContainer:any


}) => {

  const typeOfPets = [
    
    'Bearded Dragon',
    'Bird',
    'Burro',
    'Cat',
    'Chameleon (Veiled)',
    'Chicken',
    'Chinchilla',
    'Chinese Water Dragon',
    'Cow',
    'Dog',
    'Donkey',
    'Duck',
    'Ferret',
    'Fish',
    'Gecko',
    'Goose (Chinese Swan Goose)',
    'Gerbil',
    'Goat',
    'Guinea Fowl',
    'Guinea Pig',
    'Hamster',
    'Hedgehog',
    'Horse',
    'Iguana',
    'Llama',
    'Lizard',
    'Mouse',
    'Mule',
    'Peafowl',
    'Pig and Hog',
    'Pigeon',
    'Pony',
    'Pot Bellied Pig',
    'Rabbit',
    'Rat',
    'Sheep',
    'Skink',
    'Snake',
    'Stick Insect',
    'Sugar Glider',
    'Tarantula',
    'Turkey',
    'Turtle',

  ]
  const petGender=[
    'Male',
    'Female'
  ]
  const [value, setValue] = useState<string | null>(pet.category === ''? null : pet.category);
  const [inputValue, setInputValue] =useState('');
  const [valueGender, setValueGender] = useState<string | null>(pet.gender === ''? null : pet.gender);
  const [inputValueGender, setInputValueGender] =useState('');
  const [secondaryColor,setSecondaryColor]=useState<string>('');
  const [croppedUrl, setCroppedUrl] = useState<any>(null);
  const [cropped, setCropped] = useState<any>(null);
  const [imgPath,setImgPath]=useState<string>('')
  const [imageWidth,setImageWidth]=useState<number>(0);
  const [imageHeight,setImageHeight]=useState<number>(0)

  const onImageSelected = async (e:any)=>{
    e.preventDefault();
    let selectedFile = e.target.files[0];
    let reader = new FileReader();
    let image = new Image();
    image.src = URL.createObjectURL(selectedFile)
    await image.decode();
    let width = image.width;
    let height = image.height;
    width = width/10;
    height = height/10
    width=Math.ceil(width/100)*100
    height=Math.ceil(height/100)*100
    width=width+100
    height=height+100
    // console.log("check================================")
    // console.log("selectedFile",selectedFile)
    // console.log("e",e)

    reader.onload = function(event) {
      // console.log("event.target.result",event?.target?.result)
      if(event){
        if(event.target){
          if(event.target.result){

            setImageWidth(width);
            setImageHeight(height)
            setImgPath(event?.target?.result as string);
            setImageFile(selectedFile)
          }
        }

      }   
    };
    reader.readAsDataURL(selectedFile);
    // console.log("reader",reader);

    URL.revokeObjectURL(image.src)
  }
  const setCropForItem = (id:any, data:any) => {
    setCropped(() => ({ id, data }));
  };

  // useRequestPreSend(({ items }) => {
  //   return {
  //     items: [
  //       {
  //         ...items[0],
  //         //change the request's file to the cropped image
  //         file: cropped.data
  //       }
  //     ]
  //   };
  // });

  const textFieldSize = 200
  const minLabelField = 125


 

  return (
    <Box className='w-full flex-center content_wrapper' component={'form'} onSubmit={handleSubmit}>
      <FormControl className='w-full'>
        <Grid container className='w-full' alignItems="center" direction={'column'} justifyContent='center'>
            <Grid size={{xs:12}}>
              <Stack direction={'column'} spacing={1}>
                <label>
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                      <Typography style={{display:'flex',alignItems:'center',minWidth:minLabelField}} component={'span'}>Type of Pet:{' '}</Typography>
                      <Autocomplete
                        id='pet-category-input'
                        size='small'
                        sx={{
                          display:'inline-block',
                        
                        
                        }}
                        renderInput={(params) => (
                          <TextField placeholder='Select Options' sx={{width:textFieldSize}} {...params}/>
                        )}
                        value={value}
                        onChange={(e:any, newValue:string | null)=>{
                          setPet({...pet, category: newValue as string})
                          setValue(newValue)
                        }}
                        inputValue={inputValue}
                        onInputChange={(event,newInputValue)=>{
                          setInputValue(newInputValue)
                        }}
                        options={typeOfPets}  
                      />
                  </Stack>
                </label>
                <label>
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                    <Typography style={{display:'flex',alignItems:'center',minWidth:minLabelField}}  component={'span'}>Name:{' '}</Typography>
                    <TextField
                      value={pet.name}
                      size='small'
                      sx={{width:textFieldSize}}
                      required
                      id="pet-name-input"
                      placeholder="eg. Flair"
                      onChange={(e:any)=>{
                        setPet({...pet, name:e.target.value})
                      }}
                    />
                  </Stack>
                </label>
                <label>
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                      <Typography style={{display:'flex',alignItems:'center',minWidth:minLabelField}} component={'span'}>Gender:{' '}</Typography>
                      <Autocomplete
                        id='pet-gender-input'
                        size='small'
                        sx={{
                          display:'inline-block',
                        
                        
                        }}
                        renderInput={(params) => (
                          <TextField placeholder='Select Options' sx={{width:textFieldSize}} {...params}/>
                        )}
                        value={valueGender}
                        onChange={(e:any, newValue:string | null)=>{
                          setPet({...pet, gender: newValue as string})
                          setValueGender(newValue)
                        }}
                        inputValue={inputValueGender}
                        onInputChange={(event,newInputValue)=>{
                          setInputValueGender(newInputValue)
                        }}
                        options={petGender}  
                      />
                  </Stack>
                </label>
                <label>
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                    <Typography style={{display:'flex',alignItems:'center',minWidth:minLabelField}}  component={'span'}>Breed:{' '}</Typography>
                    <TextField
                      value={pet.breed}
                      size='small'
                      sx={{width:textFieldSize}}
                      required
                      id="pet-breed-input"
                      placeholder="eg. Labrador"
                      onChange={(e:any)=>{
                        setPet({...pet, breed:e.target.value})
                      }}
                    />
                  </Stack>
                </label>
                <label>
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                    <Typography style={{display:'flex',alignItems:'center',minWidth:minLabelField}}  component={'span'}>Age:{' '}</Typography>
                    <TextField
                      value={pet.age}
                      size='small'
                      sx={{width:textFieldSize}}
                      required
                      id="pet-age-input"
                      placeholder="eg. 0.6, 8.5, 15"
                      onChange={(e:any)=>{
                        setPet({...pet, age:e.target.value})
                      }}
                    />
                  </Stack>
                </label>
                <label>
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                    <Typography style={{display:'flex',alignItems:'center',minWidth:minLabelField}}  component={'span'}>Primary Color:{' '}</Typography>
                    <TextField
                      value={pet.primaryColor}
                      size='small'
                      sx={{width:textFieldSize}}
                      required
                      id="pet-primary-color-input"
                      placeholder="eg. Orange"
                      onChange={(e:any)=>{
                        setPet({...pet, primaryColor:e.target.value})
                      }}
                    />
                  </Stack>
                </label>
                <label>
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                    <Typography style={{display:'flex',alignItems:'center',minWidth:minLabelField}}  component={'span'}>Secondary Color:{' '}</Typography>
                    <TextField
                      value={secondaryColor.length < 1 ? pet.secondaryColor?.join() : secondaryColor}
                      size='small'
                      sx={{width:textFieldSize}}
                      required
                      id="pet-secondary-color-input"
                      placeholder="eg. Orange, Black, White"
                      onChange={(e:any)=>{
                        setSecondaryColor(e.target.value)
                        setPet({...pet, secondaryColor: e.target.value.split(',')})
                      }}
                    />
                  </Stack>
                </label>
                <label>
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                    <Typography style={{display:'flex',alignItems:'center',minWidth:minLabelField}}  component={'span'}>Description:{' '}</Typography>
                    <TextField
                      multiline
                      rows={2}
                      value={pet.desc}
                      size='small'
                      sx={{width:textFieldSize}}
                      required
                      id="pet-description-input"
                      placeholder="eg. Playful with other dogs"
                      onChange={(e:any)=>{
                        setPet({...pet, desc: e.target.value})
                      }}
                    />
                  </Stack>
                </label>
              </Stack>
            </Grid>
            <Divider className='py-2'/>
            <Grid size={{xs:12}}>
              <Stack spacing={2} direction={'column'}>
                <Box textAlign={'center'}>
                  <Button
                    variant="contained"
                    component="label"
                    sx={{
                      maxWidth:'200px',
                      textAlign:'center'
                    }}
                  >
                    Upload Pet Image
                    <input
                      type="file"
                      hidden
                      onChange={(e:any)=>onImageSelected(e)}
                    />
                  </Button>
                </Box>
                    <CropperWrapper width={imageWidth} height={imageHeight} img={imgPath}/>  
           
              </Stack>
            </Grid>
      
          <Stack className='w-full pt-6' justifyContent={'center'} direction="row" spacing={10}>
            <Button type='submit' variant="contained">
              Submit
            </Button>
            <Button variant="contained">
              Cancel
            </Button>
          </Stack>
          {toastContainer}
          </Grid>
      </FormControl>
    </Box>
  )
}

export default PetForm