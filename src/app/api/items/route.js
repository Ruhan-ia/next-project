import dbConnect from "@/lib/dbConnect";



export async function GET(request) {  // Added request parameter
    try {
        if (!request?.url) {
            return Response.json({ error: "Invalid request" }, { status: 400 });
        }
        const data = await dbConnect('coffees').find().toArray();
        return Response.json(data);
    } catch (error) {
        return Response.json(
            { error: "Failed to fetch data", details: error.message },
            { status: 500 }
        );
    }
}

export async function POST(request) {  // Changed parameter name from Response to request
    try {
        const postData = await request.json();  // Changed Response to request
        const result = await dbConnect('coffees').insertOne(postData);
        return Response.json(
            { success: true, insertedId: result.insertedId },
            { status: 201 }
        );
    } catch (error) {
        return Response.json(
            { error: "Failed to create record", details: error.message },
            { status: 500 }
        );
    }
}
