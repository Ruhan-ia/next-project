import dbConnect from "@/lib/dbConnect";

export async function GET() {
const data = await dbConnect('coffees').find().toArray();
return Response.json({data});
}
export async function POST(res) {
const postData = await res.json();
const result = await dbConnect('coffees').insertOne(postData);
   
return Response.json({result});
}