const optimizingImage = (imageUrl:string)=>{
    let updatedImageString = imageUrl;
    let index = updatedImageString.indexOf('upload')
    let slicing = updatedImageString.slice(0,index +6);
    let slicing2 = updatedImageString.slice(index+6,updatedImageString.length)
    let newString = `${slicing}/q_auto${slicing2}`;
    return newString
  }

  export default optimizingImage