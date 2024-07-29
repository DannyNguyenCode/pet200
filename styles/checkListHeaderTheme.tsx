import { createTheme, responsiveFontSizes } from "@mui/material";
import { Dancing_Script } from 'next/font/google';


const dancingScript = Dancing_Script(
    {
      subsets:['latin'],
      weight: "700",
    });
  
  let checkListHeaderTheme = createTheme({
    typography: {
      fontFamily: dancingScript.style.fontFamily,
      fontSize:35,

    },
  });

  
export default responsiveFontSizes(checkListHeaderTheme);