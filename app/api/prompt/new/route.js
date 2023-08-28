import { connectToDB } from "@utils/database";

export const POST = async (req, res) => {
    const { userId, pormpt, tag } = await req.json();

    try {
        await connectToDB()
    } catch (err) {
        
    }
}