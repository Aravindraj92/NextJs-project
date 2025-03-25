// actions/seedData.js

import dbconnect from '@/db/dbconnect';
import Product from '@/model/ProductModel';


export async function GET() {
    try {
        await dbconnect();
        const products = await Product.find().lean(); // .lean() returns plain objects
        return Response.json(products);
    } catch (error) {
        return Response.json({message: error.message })
    }
   
}