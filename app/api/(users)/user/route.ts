import { NextResponse } from "next/server"
import connect from '@/lib/db';
import User from "@/lib/models/User";

export const GET = async () => {
  try {
    await connect();

    const users = await User.find({});
    console.log(users.length);

    // if (users) {
    //   return new NextResponse(
    //     JSON.stringify(users), {status: 200}
    //   )
    // }
    return new NextResponse(
      JSON.stringify(users), {status: 200}
    )
  } catch (error: unknown) {
    let errorMessage = 'Error: ';

    if (error instanceof Error) {
      console.log(error.message);
      errorMessage += error.message;
    }

    return new NextResponse(
      JSON.stringify(errorMessage)
    )
  }
}