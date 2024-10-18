import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const POST = async (req: NextApiRequest) => {
    console.log('ping');

    console.log(req);
    return new NextResponse(JSON.stringify({success: true, message: 'logging in'}), {status: 200});
}