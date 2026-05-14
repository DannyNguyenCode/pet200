"use client";

import Profile from "@components/Profile";
import { Pet } from "@interfaces/pet";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function MyProfile({
  params,
}: {
  params: { message?: string[] };
}) {
  const { data: session } = useSession();
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    const fetchPets = async () => {
      if (!session?.user?.email) return;
      const response = await fetch(`/api/users/${session.user.email}/pets`);
      const data = await response.json();
      setPets(data);
    };
    fetchPets();
  }, [session]);

  return <Profile pets={pets} message={params.message} />;
}
