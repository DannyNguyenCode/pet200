'use client'
import { useState } from 'react';
import { Pet } from '@interfaces/pet'
import Grid from '@mui/material/Grid2';
import { FormControl,Box, Typography, Divider,Link} from '@mui/material'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import smartcrop from 'smartcrop'
import cropImage from '@utils/upload/cropImage';
import { smartCropResult } from '@interfaces/smartCropResult';
import { LoadingButton } from '@mui/lab';
import { useRouter } from 'next/navigation';
const PetForm = ({
  handleSubmit,
  setPet,
  pet,
  setImageFile,
  setOriginalImage,
  toastContainer,
  submitting

}:{
  handleSubmit:(e:any)=>void,
  setPet:(pet:Pet)=>void,
  pet:Pet,
  setImageFile:(imageFile:File)=>void,
  setOriginalImage:(imageFile:File)=>void,
  toastContainer:any
  submitting:boolean



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
  const [imgPath,setImgPath]=useState<string>('')
  const router = useRouter();


  const onImageSelected = async (e:any)=>{
    e.preventDefault();
    let selectedFile = e.target.files[0];
    let image = new Image();
    let blobToImagePath = new FileReader();

    let width=0;
    let height=0;
    let smartCropResult:smartCropResult = {
      height:0,
      width:0,
      x:0,
      y:0
    };
    try{
      image.src = URL.createObjectURL(selectedFile)
      await image.decode();

      width = image.width;
      height = image.height;
      width = width/10;
      height = height/10
      width=Math.ceil(width/100)*100
      height=Math.ceil(height/100)*100
      width=width+100
      height=height+100

      const onLoadCrop = async () => {
        const { blob, blobUrl, revokeUrl }:any = await cropImage(
          image, //image
          selectedFile, // file
          smartCropResult, // crop area
          true // with url
        );

        blobToImagePath.readAsDataURL(blob)
        let blobToFile = new File([blob],blob.name,{ type: "image/jpeg"})
        setImageFile(blobToFile as File)
       
        
      };
      blobToImagePath.onload = function(event) {
        if(event && event.target && event.target.result){
          setImgPath(event?.target?.result as string)
          setOriginalImage(selectedFile)

        }   
      };
      smartcrop.crop(image, { width: 100, height: 100 }).then((result)=> {
          
        smartCropResult.height = result.topCrop.height
        smartCropResult.width = result.topCrop.width
        smartCropResult.x = result.topCrop.x
        smartCropResult.y = result.topCrop.y
        onLoadCrop();
      })
  
   
    }
    catch(err){
      console.log(err)
    }finally{
      URL.revokeObjectURL(image.src)
    }

  }

  const textFieldSize = 200
  const minLabelField = 125


 

  return (
    <Box className='w-full flex-center content_wrapper' component={'form'} onSubmit={handleSubmit}>
      <FormControl className='w-full'>
        <Grid container className='w-full' alignItems="center" direction={'row'} justifyContent='center'>
            <Grid size={{xs:12,md:6}}>
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
            <Grid size={{xs:12,md:6}}>
              <Stack spacing={2} direction={'column'}>
                <Box display={'flex'} justifyContent={'space-evenly'} textAlign={'center'}>
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
                  {imgPath ?<LoadingButton size="medium"type='submit'loading={submitting}variant="contained"onClick={()=>setImgPath('')}>Cancel</LoadingButton>:<></>}

                </Box>
               
                   {imgPath ? <img width={500} height={500} src={imgPath} alt='image of uploaded pets'/>:<><Typography textAlign={'center'}>Your uploaded images are automatically cropped using AI.</Typography><Typography textAlign={'center'}> Powered by: <Link target="_blank" rel="noopener" href=' https://github.com/jwagner/smartcrop.js'> https://github.com/jwagner/smartcrop.js</Link></Typography> </> }
              </Stack>
            </Grid>
      
          <Stack className='w-full pt-6' justifyContent={'center'} direction="row" spacing={10}>
            <Button type='submit' variant="contained">
              Submit
            </Button>

          </Stack>
          {toastContainer}
          </Grid>
      </FormControl>
    </Box>
  )
}

export default PetForm