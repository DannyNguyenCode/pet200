'use client'
import { useState } from 'react';
import { Pet } from '@interfaces/pet'
import {Divider, Grid} from '@mui/material';
// category
// name
// gender
// image
// breed
// age
// primaryColor
// secondaryColors
// desc
// owner

import { FormControl,Input, FormHelperText,InputLabel, Box, Typography} from '@mui/material'

import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CropperWrapper from './CropperWrapper';
const PetForm = ({
  handleSubmit,
  setPet,
  pet,
  type
}:{
  handleSubmit:(e:any)=>void,
  setPet:(pet:Pet)=>void,
  pet:Pet,
  type:string
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
  const textFieldSize = 200
  const minLabelField = 125
  return (
    <Box className='w-full flex-center content_wrapper' component={'form'} onSubmit={handleSubmit}>
      <Typography className='py-4' textAlign={'center'} variant={'h3'}>{type} Pet Profile</Typography>
      <FormControl className='w-full'>
        <Grid container justifyContent={'center'}>
          <Grid item xs={12} md={4}>
            <Stack direction={'column'} spacing={2}>
              <label>
                <Stack direction={'row'} spacing={2}>
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
                <Stack direction={'row'} spacing={2}>
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
                <Stack direction={'row'} spacing={2}>
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
                <Stack direction={'row'} spacing={2}>
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
                <Stack direction={'row'} spacing={2}>
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
                <Stack direction={'row'} spacing={2}>
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
                <Stack direction={'row'} spacing={2}>
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
                <Stack direction={'row'} spacing={2}>
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
          <Grid position={'relative'} item xs={12} md={4}>
 
              <CropperWrapper/>

          </Grid>
        </Grid>
        
        <Stack className='w-full pt-6' justifyContent={'center'} direction="row" spacing={10}>
              <Button type='submit' variant="contained">
                Submit
              </Button>
              <Button variant="contained">
                Cancel
              </Button>
          </Stack>
      </FormControl>
    </Box>
  )
}

export default PetForm