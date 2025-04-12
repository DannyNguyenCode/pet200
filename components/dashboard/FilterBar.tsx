'use client'
import { Paper, Checkbox, FormControlLabel, FormLabel, FormControl, FormGroup, RadioGroup,Radio, Stack, Box, Typography, Divider, useMediaQuery, useTheme, IconButton, Button } from '@mui/material'
import {  useEffect, useState } from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Pet } from '@interfaces/pet'

type FilterTypes = 'category'| 'color'|'gender'| 'age'|'reset'|string


const FilterBar = ({
        setFilterData,
        petData
    }:
    {
        setFilterData:(data:Pet[])=>void,
        petData:Pet[]
    }) => {
    const [colorFilters, setColorFilters]= useState<string[]>([]);
    const [categoryValues,setCategoryValues]= useState<string[]>([]);
    const [colorValues,setColorValues]= useState<string[]>([]);
    const [genderValues, setGenderValues]= useState<string[]>([]);
    const [ageValues, setAgeValues]= useState<string>("all")
    const theme = useTheme();
    const smallBreakpoint = useMediaQuery(theme.breakpoints.down('md'));
    const [dogCheckbox,setDogCheckbox]=useState<boolean>(false);
    const [cateCheckbox,setCatCheckbox]=useState<boolean>(false);
    const [maleCheckbox,setMaleCheckbox]=useState<boolean>(false);
    const [femaleCheckbox,setFemaleCheckbox]=useState<boolean>(false);
    const [colorCheckbox,setColorCheckbox]=useState<boolean[]>([]);
    const [displayFilter,setDisplayFilter]=useState<boolean>(false)

    
    useEffect(()=>{

      if(petData.length > 0){
        let petColors:string[] = [];
        let checkBoxColors:boolean[]=[];
        petData.forEach((pet)=>{
          petColors.push(pet.primaryColor)
         
        });
        let seen:any={};
        let colorsArray:string[]=[];
        colorsArray = petColors.filter((c)=>{
       
          return seen.hasOwnProperty(c) ? false : (seen[c]=true);
        })
        colorsArray.forEach(()=>{
          checkBoxColors.push(false);
        })
        setColorFilters(colorsArray);
        setColorCheckbox(checkBoxColors)
      }

    },[petData])

    
    const handleFilter = (e:any, type:FilterTypes)=>{

        let data:Pet[] =petData;
        let categoryFilters:string[] = categoryValues;
        let colorFilters_:string[]=colorValues;
        let genderFilters:string[]=genderValues;
        let ageFilters:string=ageValues

//When a checkbox is checked
//=============================================================================
        if(e.target.checked){
          if(type.toLowerCase() === "category".toLowerCase()){
            if(e.target.value.toLowerCase() === 'dog'.toLocaleLowerCase()){
              setDogCheckbox(true)
            }
            if(e.target.value.toLowerCase() === 'cat'.toLocaleLowerCase()){
              setCatCheckbox(true)
            }
            categoryFilters.push(e.target.value)
            setCategoryValues([...categoryValues, e.target.value])
          }
          if(type.toLowerCase() === "color".toLowerCase()){

            let indexOfColor = colorFilters.indexOf(String(e.target.value).charAt(0).toUpperCase()+String(e.target.value).slice(1));
            colorCheckbox[indexOfColor] = true;

            colorFilters_.push(e.target.value)
            setColorValues([...colorValues, e.target.value])
           
          }
          if(type.toLowerCase() === "gender".toLowerCase()){
            if(e.target.value.toLowerCase() === 'male'.toLocaleLowerCase()){
              setMaleCheckbox(true)
            }
            if(e.target.value.toLowerCase() === 'female'.toLocaleLowerCase()){
              setFemaleCheckbox(true)
            }
            genderFilters.push(e.target.value)
            setGenderValues([...genderValues, e.target.value])      
          }
          if(type.toLowerCase() === "age".toLowerCase()){
            ageFilters=e.target.value
            setAgeValues(e.target.value)     
          }
        }
//=============================================================================

//When checkbox is unchecked
//=============================================================================
        if(!e.target.checked){
          if(type.toLowerCase() === "category".toLowerCase()){
            if(e.target.value.toLowerCase() === 'dog'.toLocaleLowerCase()){
              setDogCheckbox(false)
            }
            if(e.target.value.toLowerCase() === 'cat'.toLocaleLowerCase()){
              setCatCheckbox(false)
            }
            categoryFilters = categoryFilters.filter((category)=> category.toLowerCase() !== e.target.value.toLowerCase())
            setCategoryValues(categoryFilters)
          }
          if(type.toLowerCase() === "color".toLowerCase()){

            let indexOfColor = colorFilters.indexOf(String(e.target.value).charAt(0).toUpperCase()+String(e.target.value).slice(1));
            colorCheckbox[indexOfColor] = false;

            colorFilters_ = colorFilters_.filter((color)=>color.toLowerCase() !== e.target.value.toLowerCase())

            setColorValues(colorFilters_)
          }
          if(type.toLowerCase() === "gender".toLowerCase()){
            if(e.target.value.toLowerCase() === 'male'.toLocaleLowerCase()){
              setMaleCheckbox(false)
            }
            if(e.target.value.toLowerCase() === 'female'.toLocaleLowerCase()){
              setFemaleCheckbox(false)
            }
            genderFilters = genderFilters.filter((gender)=>gender.toLowerCase() !== e.target.value.toLowerCase())
            setGenderValues(genderFilters)
          }
        }
//=============================================================================

//Cycle through arrays and add filter into an data array based on values input by user
//=============================================================================
        if(categoryFilters.length > 0){
          data = data.filter((pet)=>{
            return categoryFilters.includes(pet.category.toLowerCase() as string)       
          })

        }
        if(colorFilters_.length > 0){
          data = data.filter((pet)=>{
            return colorFilters_.includes(pet.primaryColor.toLowerCase() as string)       
          })
        }
        if(genderFilters.length > 0){
          data = data.filter((pet)=>{
            return genderFilters.includes(pet.gender.toLowerCase() as string)       
          })
        }
        if(e.target.type.toLowerCase() === "radio".toLowerCase() || ageFilters !== "all"){
            data = data.filter((pet)=>{
              if(ageFilters === "1"){
                return parseFloat(pet.age) <= 1
              }
              else if(ageFilters === "5"){
                return parseFloat(pet.age) > 1 && parseFloat(pet.age) <=10
              } 
              else if(ageFilters === "10"){
                return parseFloat(pet.age) > 10
              }else{
                return pet;
              }        
            })
        }
//=============================================================================
        setFilterData(data)

    }
    const clearFilter = ()=>{

      setDogCheckbox(false)
      setCatCheckbox(false)
      setMaleCheckbox(false)
      setFemaleCheckbox(false)

      setCategoryValues([])
      setColorValues([])
      setGenderValues([])
      setAgeValues('all')

      let colorCheckBox_ = colorCheckbox;
      colorCheckBox_ = colorCheckBox_.map((checkbox)=>{
        return checkbox = false
      })
      setColorCheckbox(colorCheckBox_)

      setFilterData([...petData])
    }
    
    const handleFiltersButton=()=>{
      
      setDisplayFilter(!displayFilter)
    }
    const submitFilters = ()=>{
      setDisplayFilter(false)
    }
  return (
    <>
      <Button variant='outlined' color='secondary' sx={{display:{xs:'flex',md:'none'}, margin:'0.5em'}} onClick={handleFiltersButton}>Filters</Button>
      <Button variant='outlined' color='error' sx={{display:{xs:'none',md:'flex'}, marginBottom:'0.5em'}} onClick={clearFilter}>Clear Filters</Button>
      <Paper sx={{alignContent:'center', justifyContent:'center', textAlign:'center', display:{xs:displayFilter?'flex':'none',md:'flex'}}} elevation={8}>

        <Stack direction={smallBreakpoint?'column':'row'} spacing={2} sx={{display:'flex', justifyContent:'space-around', width:'100%', paddingY:'0.5em'}}>
        <Box component={'div'} sx={{display:{xs:'flex',md:'none'}, justifyContent:'space-evenly'}} >
          <Button variant='outlined' color='error' onClick={clearFilter}>Clear Filters</Button>
          <Button variant='contained' color='success' onClick={submitFilters}>Done</Button>
        </Box>
          <FormControl variant="outlined">
            <FormLabel sx={{textAlign:smallBreakpoint?'left':'center'}} focused={false}>Pet Category</FormLabel>
            <FormGroup>
              <Stack direction={{xs:'column',md:'row'}}>
                <FormControlLabel className='formControlLabel-custom' sx={{marginLeft:0}}
                  control={
                    <Checkbox className={'checkbox-customization'} checked={cateCheckbox} value={'cat'} onChange={(e:any)=>handleFilter(e,"category")} />
                  }
                  label="Cat"
                />
                <FormControlLabel className='formControlLabel-custom' sx={{marginLeft:0}}
                  control={
                    <Checkbox className={'checkbox-customization'} checked={dogCheckbox} value={'dog'} onChange={(e:any)=>handleFilter(e,"category")} />
                  }
                  label="Dog"
                />
              </Stack>
                
            </FormGroup>  
          </FormControl>

          <FormControl variant="outlined">
            <FormLabel sx={{textAlign:smallBreakpoint?'left':'center'}} focused={false}>Gender</FormLabel>
            <FormGroup>
              <Stack direction={{xs:'column',md:'row'}}>
                <FormControlLabel className='formControlLabel-custom' sx={{marginLeft:0}}
                  control={
                    <Checkbox className={'checkbox-customization'} checked={maleCheckbox} value={'male'}  onChange={(e:any)=>handleFilter(e,"gender")} />
                  }
                  label="Male"
                />
                <FormControlLabel className='formControlLabel-custom' sx={{marginLeft:0}}
                  control={
                    <Checkbox className={'checkbox-customization'} checked={femaleCheckbox} value={'female'} onChange={(e:any)=>handleFilter(e,"gender")} />
                  }
                  label="Female"
                />
              </Stack>
            </FormGroup>  
          </FormControl>

          {colorFilters.length > 0?

            <FormControl variant="outlined">
              <FormLabel sx={{textAlign:smallBreakpoint?'left':'center'}} focused={false}>Color</FormLabel>
              <FormGroup>
                <Stack direction={{xs:'column',md:'row'}}>
                  {colorFilters.map((color, i)=>{
                      return(
                          <FormControlLabel className='formControlLabel-custom' sx={{marginLeft:0}}
                              key={i}
                              control={
                                <Checkbox className={'checkbox-customization'} checked={colorCheckbox[i]} value={color.toLowerCase()}  onChange={(e:any)=>handleFilter(e,"color")} />
                              }
                              label={`${color}`}
                          />
                      )
                  })}
                </Stack>
              </FormGroup>  
            </FormControl>:<></>
          }   

          <FormControl variant="outlined">
            <FormLabel sx={{textAlign:smallBreakpoint?'left':'center'}} focused={false}>Age</FormLabel>
            <RadioGroup defaultValue={"all"}>
              <Stack direction={{xs:'column',md:'row'}}>
                <FormControlLabel className='formControlLabel-custom' sx={{marginLeft:0}}
                  control={
                    <Radio className={'radio-customization'} checked={ageValues==='1'?true:false}  value={'1'}  onChange={(e:any)=>{
                      handleFilter(e,"age")
                    }} />
                  }
                  label="0-1"
                />
                <FormControlLabel className='formControlLabel-custom' sx={{marginLeft:0}}
                  control={
                    <Radio className={'radio-customization'} checked={ageValues==='5'?true:false}  value={'5'} onChange={(e:any)=>{           
                      handleFilter(e,"age")
                    }} />
                  }
                  label="1-10"
                />
                <FormControlLabel className='formControlLabel-custom' sx={{marginLeft:0}}
                  control={
                    <Radio className={'radio-customization'} checked={ageValues==='10'?true:false}  value={'10'} onChange={(e:any)=>{
                      handleFilter(e,"age")
                    }} />
                  }
                  label="10+"
                />
                <FormControlLabel className='formControlLabel-custom' sx={{marginLeft:0}}
                  control={
                    <Radio className={'radio-customization'} checked={ageValues==='all'?true:false}  value={'all'} onChange={(e:any)=>{
                      handleFilter(e,"age")
                    }} />
                  }
                  label="All Ages"
                />
              </Stack>
            </RadioGroup>  
          </FormControl>

        </Stack>
      </Paper>
    </>

  )
}

export default FilterBar