'use client'

import { Area } from "react-easy-crop";

const getBlobFromCanvas = (canvas:any, file:any, withUrl:any) =>
    new Promise((resolve, reject) => {
      canvas.toBlob((blob:any) => {
        if (blob) {
          blob.name = file.name;
          blob.lastModified = file.lastModified;
  
          let blobUrl:any, revokeUrl:any;
  
          if (withUrl) {
            blobUrl = URL.createObjectURL(blob);
            revokeUrl = () => URL.revokeObjectURL(blobUrl);
          }
  
          resolve({ blob, blobUrl, revokeUrl });
        } else {
          reject(new Error("Canvas is empty"));
        }
      }, file.type);
    });
  
  const cropImage = async (imageElm:any, file:any, crop:Area, withUrl = false) => {
    const canvas = document.createElement("canvas"),
      scaleX = imageElm.naturalWidth / imageElm.width,
      scaleY = imageElm.naturalHeight / imageElm.height,
      pixelRatio = window.devicePixelRatio,
      ctx:any = canvas.getContext("2d");
  
    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;
  
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(
      imageElm,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );
  
    return await getBlobFromCanvas(canvas, file, withUrl);
  };
  
  export default cropImage;
  