"use server";

import User from "@/lib/database/models/user.model";
import { connectToDatabase } from "@/lib/database/db";

export async function createUser(user: any) {
  try {
    await connectToDatabase();
    console.log("db created")
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}
