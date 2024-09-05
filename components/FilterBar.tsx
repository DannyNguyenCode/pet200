'use client'
import { Paper, Checkbox, FormControlLabel, FormLabel, FormControl, FormGroup, RadioGroup,Radio } from '@mui/material'
import {  useEffect, useState } from 'react'
import { Pet } from '@interfaces/pet'

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
    <Paper elevation={0} className='w-full mt-2 flex flex-col'>
        <Paper elevation={0} className='w-full mt-4 flex flex-row'>
            <Paper elevation={1} className='m-5 p-3 pr-0 mr-0 ml-2'>
                <FormControl variant="outlined">
                  <FormLabel focused={false}>Pet Category</FormLabel>
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Checkbox value={'cat'}  onChange={(e:any)=>handleFilter(e,"category")} />
                      }
                      label="Cat"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox value={'dog'} onChange={(e:any)=>handleFilter(e,"category")} />
                      }
                      label="Dog"
                    />
                  </FormGroup>  
                </FormControl>
            </Paper>
            <Paper elevation={1} className='m-5 p-3 pr-0 mr-0 ml-2'>
                <FormControl variant="outlined">
                  <FormLabel focused={false}>Gender</FormLabel>
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Checkbox value={'male'}  onChange={(e:any)=>handleFilter(e,"gender")} />
                      }
                      label="Male"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox value={'female'} onChange={(e:any)=>handleFilter(e,"gender")} />
                      }
                      label="Female"
                    />
                  </FormGroup>  
                </FormControl>
            </Paper>
            <Paper elevation={1} className='m-5 p-3 pr-0 mr-0 ml-2'>
                <FormControl variant="outlined">
                  <FormLabel focused={false}>Color</FormLabel>
                  <FormGroup row>
                    {colorFilters.map((color, i)=>{
                        return(
                            <FormControlLabel
                                key={i}
                                control={
                                  <Checkbox value={color.toLowerCase()}  onChange={(e:any)=>handleFilter(e,"color")} />
                                }
                                label={`${color}`}
                            />
                        )
                    })}

                  </FormGroup>  
                </FormControl>
            </Paper>
                  
        </Paper>
        <Paper elevation={0} className='flex flex-row'>
            <Paper elevation={1} className='ml-1 my-3 pl-1 py-2'>
                <FormControl variant="outlined">
                  <FormLabel focused={false}>Age</FormLabel>
                  <RadioGroup defaultValue={"all"} row>
                    <FormControlLabel
                      control={
                        <Radio  value={'1'}  onChange={(e:any)=>{
                          handleFilter(e,"age")
                        }} />
                      }
                      label="Less than 1"
                    />
                    <FormControlLabel
                      control={
                        <Radio  value={'5'} onChange={(e:any)=>{           
                          handleFilter(e,"age")
                        }} />
                      }
                      label="Between 1 and 10"
                    />
                    <FormControlLabel
                      control={
                        <Radio  value={'10'} onChange={(e:any)=>{
                          handleFilter(e,"age")
                        }} />
                      }
                      label="Over 10"
                    />
                    <FormControlLabel
                      control={
                        <Radio  value={'all'} onChange={(e:any)=>{
                          handleFilter(e,"age")
                        }} />
                      }
                      label="All Ages"
                    />
                  </RadioGroup>  
                </FormControl>
            </Paper>
        </Paper>
    </Paper>
  )
}

export default FilterBar