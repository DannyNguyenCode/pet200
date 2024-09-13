const optimizingImage = (imageUrl:string)=>{
    let updatedImageString = imageUrl;
    let index = updatedImageString.indexOf('upload')
    // console.log("index",index)
    let slicing = updatedImageString.slice(0,index +6);
    let slicing2 = updatedImageString.slice(index+6,updatedImageString.length)

    // console.log("slicing",slicing)
    // console.log("slicing2",slicing2)

    let newString = `${slicing}/w_400,h_400,c_scale,c_limit${slicing2}`;
    // console.log("newString",newString) 
    return newString
  }

  export default optimizingImage