import { createTheme, responsiveFontSizes } from "@mui/material";
import { Dancing_Script } from 'next/font/google';
import { Aclonica } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets:['latin'],
  weight: "700",
});

let dancingScriptsTheme = createTheme({
  typography: {
    fontFamily: dancingScript.style.fontFamily,
    fontSize:35,
    
  },
});

const aclonica = Aclonica({
  subsets:['latin'],
  weight: "400",
});

let aclonicasTheme = createTheme({
typography: {
  fontFamily: aclonica.style.fontFamily,
  fontSize:20
},
});


export const getDancingScript = ()=>{
  return responsiveFontSizes(dancingScriptsTheme)
}

export const getAclonica = ()=>{
  return responsiveFontSizes(aclonicasTheme)
}


  
