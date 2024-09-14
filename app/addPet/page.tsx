'use client'
import PetForm from '@components/PetForm'
import { Pet } from '@interfaces/pet'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { uploadStagedFile } from '@utils/upLoadStagedFile'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Stack,Typography } from '@mui/material'

const AddPet = () => {
    const {data:session} = useSession();
    const [imageFile,setImageFile]= useState<File>()
    const [originalImage,setOriginalImage]=useState<File>();
    const router = useRouter();
    const [pet,setPet]=useState<Pet>({
        _id:0,
        category:'',
        name:'',
        gender:'',
        originalImage:'',
        croppedImage:'',
        breed:'',
        age:'',
        primaryColor:'',
        secondaryColor:[],
        desc:'',
        owner:''
    })
    
    const [submitting,setSubmitting]= useState(false);

    const addPet = async(e:any)=>{
        e.preventDefault();
        let originalResult;
        let croppedResult
        setSubmitting(true);

        try {
            if(originalImage){
                originalResult = await uploadStagedFile(originalImage)
            }

            if(imageFile){
                croppedResult = await uploadStagedFile(imageFile)
            }else{
                toast('Please upload an image of your pet.')
                return;
            }
            const res = await fetch(`/api/pet/new`,
                {
                    method:'POST',
                    body:JSON.stringify({
                        category:pet.category,
                        name:pet.name,
                        gender:pet.gender,
                        originalImage:originalResult.secure_url,
                        croppedImage:croppedResult.secure_url,
                        breed:pet.breed,
                        age:parseFloat(pet.age),
                        primaryColor:pet.primaryColor,
                        secondaryColor:pet.secondaryColor,
                        desc:pet.desc,
                        owner:session?.user.email,
                    })
                }
            );
            if(res.ok){
                router.push('/profile')
            }
        } catch (error) {
            console.log(error);
        }finally{
            setSubmitting(false)
        }
    }
    return (
      
            <Stack spacing={2} direction={'column'}>
                <Typography className='py-4' textAlign={'center'} variant={'h3'}>Create Pet Profile</Typography>
                <PetForm
                    handleSubmit={addPet}
                    setPet={setPet}
                    pet={pet}
                    setImageFile={setImageFile}
                    setOriginalImage={setOriginalImage}
                    toastContainer={<ToastContainer theme='dark'/>}/>
            </Stack>
    
        

    


    )
}

export default AddPet