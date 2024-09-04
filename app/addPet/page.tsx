'use client'
import PetForm from '@components/PetForm'
import { Pet } from '@interfaces/pet'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


const AddPet = () => {
    const {data:session} = useSession();
    const router = useRouter();
    const [pet,setPet]=useState<Pet>({
        _id:0,
        category:'',
        name:'',
        gender:'',
        image:'',
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

        setSubmitting(true);
        try {
            const res = await fetch(`/api/pet/new`,
                {
                    method:'POST',
                    body:JSON.stringify({
                        category:pet.category,
                        name:pet.name,
                        gender:pet.gender,
                        image:pet.image,
                        breed:pet.breed,
                        age:parseFloat(pet.age),
                        primaryColor:pet.primaryColor,
                        secondaryColor:pet.secondaryColor,
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
      <PetForm
        handleSubmit={addPet}
        setPet={setPet}
        pet={pet}
        type={'Create'}
      />
    )
}

export default AddPet