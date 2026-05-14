import Pet from "@models/pet";
import { connecToDB } from "@utils/database";
import mongoose from "mongoose";

export const GET = async (
  _req: Request,
  { params }: { params: { id: string } },
) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return new Response(JSON.stringify({ error: "Invalid id" }), {
        status: 400,
      });
    }
    await connecToDB();
    const pet = await Pet.findById(params.id).lean();
    if (!pet) {
      return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(pet), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: "Failed to fetch pet" }), {
      status: 500,
    });
  }
};
