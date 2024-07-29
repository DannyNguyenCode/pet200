import { Box, Slider } from '@mui/material';
import React, { useState } from 'react'
import Cropper, { Area } from 'react-easy-crop';

const CropperWrapper = () => {
    const [croppedArea,setCroppedArea]= useState({x:0,y:0});
    const [zoom,setZoom]=useState(1);
    const onCropComplete = (croppedArea:Area,croppedAreaPixels:Area)=>{
        console.log("=====")
        console.log("croppedArea",croppedArea);
        console.log("croppedAreaPixels",croppedAreaPixels)
    }
  return (
    <Box component={'div'}>
        <Cropper
            image='/images/mina.jpg'
            crop={croppedArea}
            zoom={zoom}
            aspect={1}
            onCropChange={setCroppedArea}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
        />
        <Slider 
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            aria-labelledby='Zoom'
            onChange={(e,zoomArg)=>setZoom(Number(zoomArg))}
         
        />
    </Box>
  )
}

export default CropperWrapper