import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(res, {params}) {
    const p = await params
    const singleData = await dbConnect('coffees').findOne({ _id: new ObjectId(p.id) });
    return Response.json({singleData});
    }
export async function DELETE(res, {params}) {
    const p = await params
    const deleteData = await dbConnect('coffees').deleteOne({ _id: new ObjectId(p.id) });

    return Response.json({deleteData});
    }
export async function PATCH(res, {params}) {
    const p = await params
    const postData = await res.json();
    const filter = { _id: new ObjectId(p.id) };
    const updateDoc = await dbConnect('coffees').updateOne(filter, { $set: {...postData} }, { upsert: true });
    return Response.json({updateDoc});
    }