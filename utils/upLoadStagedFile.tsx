export const uploadStagedFile = async(stagedFile:File | Blob)=>{
    try{
        const form = new FormData();
        form.set("file",stagedFile);
        const postImage = await fetch(`/api/cloudinary`,{
            method:'POST',
            body:form
        })
        let result = await postImage.json();
        return result
    }catch(err){
        console.log(err)
    }
}


