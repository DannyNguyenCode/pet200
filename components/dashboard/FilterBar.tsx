'use client'
import { Paper, Checkbox, FormControlLabel, FormLabel, FormControl, FormGroup, RadioGroup,Radio, Stack, Typography } from '@mui/material'
import {  useEffect, useState } from 'react'
import { Pet } from '@interfaces/pet'
import Grid from '@mui/material/Grid2'
const FilterBar = ({
        setFilterData,petData
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
    useEffect(()=>{

      if(petData.length > 0){
        let petColors:string[] = [];
        petData.forEach((pet)=>{
          petColors.push(pet.primaryColor)
        });
        let seen:any={};
        let colorsArray:string[]=[];
        colorsArray = petColors.filter((c)=>{
          return seen.hasOwnProperty(c) ? false : (seen[c]=true);
        })
        setColorFilters(colorsArray);
      }

    },[petData])

    
    const handleFilter = (e:any, type:string)=>{


        let data:Pet[] =petData;
        let categoryFilters:string[] = categoryValues;
        let colorFilters:string[]=colorValues;
        let genderFilters:string[]=genderValues;
        let ageFilters:string=ageValues

//When a checkbox is checked
//=============================================================================
        if(e.target.checked){
          if(type.toLowerCase() === "category".toLowerCase()){
            categoryFilters.push(e.target.value)
            setCategoryValues([...categoryValues, e.target.value])
          }
          if(type.toLowerCase() === "color".toLowerCase()){
            colorFilters.push(e.target.value)
            setColorValues([...colorValues, e.target.value])
           
          }
          if(type.toLowerCase() === "gender".toLowerCase()){
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
            categoryFilters = categoryFilters.filter((category)=> category.toLowerCase() !== e.target.value.toLowerCase())
            setCategoryValues(categoryFilters)
          }
          if(type.toLowerCase() === "color".toLowerCase()){
            colorFilters = colorFilters.filter((color)=>color.toLowerCase() !== e.target.value.toLowerCase())
            setColorValues(colorFilters)
          }
          if(type.toLowerCase() === "gender".toLowerCase()){
            genderFilters = genderFilters.filter((gender)=>gender.toLowerCase() !== e.target.value.toLowerCase())
            setGenderValues(genderFilters)
          }
        }
//=============================================================================

//Cycle through arrays and filter array based on values based by user
//=============================================================================
        if(categoryFilters.length > 0){
          data = data.filter((pet)=>{
            return categoryFilters.includes(pet.category.toLowerCase() as string)       
          })

        }
        if(colorFilters.length > 0){
          data = data.filter((pet)=>{
            return colorFilters.includes(pet.primaryColor.toLowerCase() as string)       
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
                return parseFloat(pet.age) < 1
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
  return (
  <Grid id='filterbarWrapper'sx={{
    marginBottom:{
      xs:'2rem'
    }
  }} size={{xs:6,md:1}}>
          <Stack spacing={2}>
            <Paper elevation={0}><Typography variant='h6'>Filters</Typography></Paper>
           
            <Paper elevation={1} className='filterPaperWrapper'>
                <FormControl variant="outlined">
                  <FormLabel focused={false}>Pet Category</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox className={'checkbox-customization'} value={'cat'}  onChange={(e:any)=>handleFilter(e,"category")} />
                      }
                      label="Cat"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox className={'checkbox-customization'} value={'dog'} onChange={(e:any)=>handleFilter(e,"category")} />
                      }
                      label="Dog"
                    />
                  </FormGroup>  
                </FormControl>
            </Paper>
            <Paper elevation={1} className='filterPaperWrapper'>
                <FormControl variant="outlined">
                  <FormLabel focused={false}>Gender</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox className={'checkbox-customization'} value={'male'}  onChange={(e:any)=>handleFilter(e,"gender")} />
                      }
                      label="Male"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox className={'checkbox-customization'} value={'female'} onChange={(e:any)=>handleFilter(e,"gender")} />
                      }
                      label="Female"
                    />
                  </FormGroup>  
                </FormControl>
            </Paper>
            <Paper elevation={1} className='filterPaperWrapper'>
                <FormControl variant="outlined">
                  <FormLabel focused={false}>Color</FormLabel>
                  <FormGroup>
                    {colorFilters.map((color, i)=>{
                        return(
                            <FormControlLabel
                                key={i}
                                control={
                                  <Checkbox className={'checkbox-customization'} value={color.toLowerCase()}  onChange={(e:any)=>handleFilter(e,"color")} />
                                }
                                label={`${color}`}
                            />
                        )
                    })}

                  </FormGroup>  
                </FormControl>
            </Paper>
                  
            <Paper elevation={1} className='filterPaperWrapper'>
                <FormControl variant="outlined">
                  <FormLabel focused={false}>Age</FormLabel>
                  <RadioGroup defaultValue={"all"}>
                    <FormControlLabel
                      control={
                        <Radio className={'radio-customization'}  value={'1'}  onChange={(e:any)=>{
                          handleFilter(e,"age")
                        }} />
                      }
                      label="0-1"
                    />
                    <FormControlLabel
                      control={
                        <Radio className={'radio-customization'}  value={'5'} onChange={(e:any)=>{           
                          handleFilter(e,"age")
                        }} />
                      }
                      label="1-10"
                    />
                    <FormControlLabel
                      control={
                        <Radio className={'radio-customization'}  value={'10'} onChange={(e:any)=>{
                          handleFilter(e,"age")
                        }} />
                      }
                      label="10+"
                    />
                    <FormControlLabel
                      control={
                        <Radio className={'radio-customization'}  value={'all'} onChange={(e:any)=>{
                          handleFilter(e,"age")
                        }} />
                      }
                      label="All Ages"
                    />
                  </RadioGroup>  
                </FormControl>
            </Paper>
          </Stack>
  </Grid>
  )
}

export default FilterBar