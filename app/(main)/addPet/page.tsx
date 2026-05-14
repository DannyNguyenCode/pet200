"use client";

import PetForm from "@components/PetForm";
import { Pet } from "@interfaces/pet";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { uploadStagedFile } from "@utils/upLoadStagedFile";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddPet() {
  const { data: session } = useSession();
  const [imageFile, setImageFile] = useState<File>();
  const [originalImage, setOriginalImage] = useState<File>();
  const router = useRouter();
  const [pet, setPet] = useState<Pet>({
    _id: 0,
    category: "",
    name: "",
    gender: "",
    originalImage: "",
    croppedImage: "",
    breed: "",
    age: "",
    primaryColor: "",
    secondaryColor: [],
    desc: "",
    owner: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const addPet = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      let originalResult;
      let croppedResult;
      if (originalImage) {
        originalResult = await uploadStagedFile(originalImage);
      }
      if (imageFile) {
        croppedResult = await uploadStagedFile(imageFile);
      } else {
        toast("Please upload an image of your pet.");
        return;
      }
      const res = await fetch(`/api/pet/new`, {
        method: "POST",
        body: JSON.stringify({
          category: pet.category,
          name: pet.name,
          gender: pet.gender,
          originalImage: originalResult?.secure_url,
          croppedImage: croppedResult?.secure_url,
          breed: pet.breed,
          age: parseFloat(String(pet.age)),
          primaryColor: pet.primaryColor,
          secondaryColor: pet.secondaryColor,
          desc: pet.desc,
          owner: session?.user?.email,
        }),
      });
      if (res.ok) {
        router.push("/profile");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100dvh-8rem)] flex-col overflow-x-hidden bg-background font-body-md text-on-background">
      <main className="wood-base flex flex-grow items-center justify-center px-3 pb-8 pt-4 sm:px-4">
        <div className="relative w-full min-w-0 max-w-2xl">
          <div className="absolute -top-4 left-0 right-0 z-10 h-8 w-full rounded-full border-b-2 border-primary bg-[#4E342E]" />
          <div className="scroll-texture relative rounded-sm border-x-4 border-[#D7CCC8] p-5 shadow-2xl sm:border-x-6 sm:p-8 md:border-x-8 md:p-12">
            <div className="mb-12 text-center">
              <h2 className="mb-2 font-display-lg-mobile uppercase tracking-tighter text-primary md:font-display-lg">
                Summoning Rite
              </h2>
              <div className="mx-auto mb-4 h-1 w-24 bg-tertiary" />
              <p className="font-body-md italic text-on-surface-variant">
                Chapter I: Defining the Familiar
              </p>
            </div>
            <PetForm
              handleSubmit={addPet}
              setPet={setPet}
              pet={pet}
              setImageFile={setImageFile}
              setOriginalImage={setOriginalImage}
              toastContainer={<ToastContainer theme="dark" />}
              submitting={submitting}
            />
            <div className="mt-12 flex justify-center opacity-30">
              <span className="material-symbols-outlined text-6xl text-primary">
                history_edu
              </span>
            </div>
          </div>
          <div className="absolute -bottom-4 left-0 right-0 z-10 h-8 w-full rounded-full border-t-2 border-primary bg-[#4E342E]" />
        </div>
      </main>
    </div>
  );
}
